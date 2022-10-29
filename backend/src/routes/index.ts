import { Router, Request, Response } from "express";
import MovieRoutes from './movie.routes';

const router = Router();
const version = `v${process.env.VERSION || 1}`;

router.use(`/${version}/movies`, MovieRoutes);

router.get('/terms', (_: Request, res: Response) => res.send('Terms'));

export default router;
