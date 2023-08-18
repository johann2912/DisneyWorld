import { Router } from 'express';
const router = Router();

/**
 * @swagger
 * /characters:
 *   get:
 *     tags:
 *     - "characters"
 *     summary: Obtiene una lista de personajes
 *     responses:
 *       200:
 *         description: Lista de personajes
 */
router.get('/', (req, res) => {
    res.json({saludo: 'hola mundo'})
});


export default router;