import {Router} from "express";
import {getSeries, createSerie, modifySerie, deleteSeries } from "../controllers/series.controller.js";
import { getIndex } from "../controllers/index.controller.js";

const router = Router();

router.get('/', getIndex)
router.get('/series', getSeries)
router.post('/series', createSerie)
router.put('/series/:id',modifySerie)
router.delete('/series/:id', deleteSeries)

export default router;