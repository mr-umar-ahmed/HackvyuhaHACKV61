import express from 'express';
import { getSuccessStories } from '../controllers/successController.js';

const router = express.Router();
router.get('/', getSuccessStories);

export default router;
