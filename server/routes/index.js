//routes/index.js

import express from 'express';
import drinkAPI from './drink.api.js';

const router = express.Router();

router.use("/drinks", drinkAPI);

export default router;
