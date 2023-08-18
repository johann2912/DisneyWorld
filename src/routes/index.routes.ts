import { Router } from "express";
import characterRoutes from './character.route';

const router = Router();

router.route('/').get((req, res) => res.json('hello world - initial route'));
router.use('/characters', characterRoutes);

export default router;