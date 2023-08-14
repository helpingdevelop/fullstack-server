import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json({
    auth: true,
  });
});

export default router;
