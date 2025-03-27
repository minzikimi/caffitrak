import express from 'express';
const router = express.Router();

router.post("/", (req, res) => {
    res.send("drink added");
});

router.get("/", (req, res) => {
    res.send("get drinks");
});

router.put("/:id", (req, res) => {
    res.send("update drink");
});

router.delete("/:id", (req, res) => {
    res.send("delete drink");
});

export default router;
