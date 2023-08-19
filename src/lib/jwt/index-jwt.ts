import Config from '../../config/config_env';
import { sign, verify } from 'jsonwebtoken';
import { RedisService } from '../../dataAccess/redis/index-redis';
import { IAccess } from './interfaces/access.interface';
import { IRefresh } from './interfaces/refresh.interface';
import logger from '../../config/logger';


export class JWTService {
    constructor(
        private readonly redisService: RedisService,
    ) { 
    };

    public async verifyAccess(token: string) {
        const access: any = Config.jwt.accessKey;
        try {
            return verify(token, access);
        } catch (error) {
            logger.error('Invalid access token')
        }
    };
    verifyRefresh = (token: string) => {
        const refresh: any = Config.jwt.refreshKey;
        try {
            return verify(token, refresh);
        } catch (error) {
            logger.error('Invalid refresh token')
        }
    };
    createAccess = async (payload: IAccess) => {
        const access: any = Config.jwt.accessKey;
        const token = sign(payload, access, { expiresIn: '8h' });
        await this.redisService.setSessionValue(
            'access',
            payload.id,
            token,
            3600 * 3,
        );
        return token;
    };
    createRefresh = async (payload: IRefresh) => {
        const access: any = Config.jwt.refreshKey;
        const token = sign(payload, access, { expiresIn: '14d' });
        await this.redisService.setSessionValue(
            'refresh',
            payload.id,
            token,
            3600 * 24 * 14,
        );
        return token;
    };
};