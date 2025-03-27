import express from 'express';

import drinkController from '../controller/drink.controller.js';
const router = express.Router();

router.post("/", drinkController.createDrink);

router.get("/", drinkController.getDrink);

router.put("/:id", (req, res) => {
    res.send("update drink");
});

router.delete("/:id", (req, res) => {
    res.send("delete drink");
});

export default router;
