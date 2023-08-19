import { JWTService } from '../jwt/index-jwt';
import { Request, Response, NextFunction } from 'express';
import { RedisService } from '../../dataAccess/redis/index-redis';
const redis = new RedisService();


declare global {
    namespace Express {
        interface Request {
            user: any;
        }
    }
}

export const jwtMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.header('Authorization');
        if (!token) throw res.status(401).json({ message: 'Token not found' });
        const jwtService = new JWTService(redis);
        const decodedToken = await jwtService.verifyAccess(token);
        req.user = decodedToken;
        next();
    } catch (error) {
        next(error);
    }
}
