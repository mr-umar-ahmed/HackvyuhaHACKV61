import express from 'express';
import { getDailyInsights } from '../controllers/insightController.js';

const router = express.Router();
router.get('/', getDailyInsights);

export default router;
