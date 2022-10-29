import { Router } from "express";
import MovieController from "../App/Controllers/MovieController";

const router = Router();

router.get('/', MovieController.list);

export default router;
