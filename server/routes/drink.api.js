import express from 'express';

import drinkController from '../controller/drink.controller.js';
const router = express.Router();

router.post("/", drinkController.createDrink);

router.get("/", drinkController.getDrink);

router.put("/:id", drinkController.updateDrink); // fixed

router.delete("/:id", drinkController.deleteDrink); // fixed

export default router;
