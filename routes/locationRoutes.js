import express from 'express';
import { getLocationsByDistrict } from '../controllers/locationController.js';

const router = express.Router();
router.get('/:district', getLocationsByDistrict);

export default router;
