import { Tedis } from 'tedis';
import logger from '../../config/logger';
import config from '../../config/config_env';


export class RedisService {
    private tedis: Tedis;
    constructor() {
        let redis = {
            host: config.db.redis.host,
            port: config.db.redis.port,
            password: config.db.redis.password,
        };
        this.tedis = new Tedis({
            host: redis.host,
            password: redis.password,
        });
        logger.info('Connection with REDIS succesfully');
    };

    private generateSessionKey = (type: string, key: string) => `${type}:${key}`;

    async getSessionValue(type: string, key: string) {
        const redisKey = this.generateSessionKey(type, key);
        logger.log('[REDIS]',`Getting session key -> ${redisKey}`);
        return await this.tedis.get(redisKey);
    }

    async setSessionValue(type: string, id: string, token: string, expiredAt: number) {
        const redisKey = this.generateSessionKey(type, id);
        try {
            await this.tedis.setex(redisKey, expiredAt, token);
            logger.log('[REDIS]',`New session created -> ${redisKey}`);
        } catch (error) {
            logger.error(`Error creating session ${id}`);
            throw error;
        }
    }

    async deleteSessionValue(id: string) {
        const accessKey = this.generateSessionKey('access', id);
        const refreshKey = this.generateSessionKey('refresh', id);
        await this.tedis.del(accessKey, refreshKey);
        logger.log('[REDIS]', `Session keys deleted for ID ${id}`);
    }

    async existsKey(type: string, key: string) {
        const redisKey = this.generateSessionKey(type, key);
        const exists = await this.tedis.exists(redisKey);
        logger.log('[REDIS]',`Key exists for ${redisKey}: ${exists}`);
        return exists;
    }
}
