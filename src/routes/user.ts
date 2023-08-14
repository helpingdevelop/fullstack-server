import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json({
    user: {
      name: "John Doe",
    },
  });
});

export default router;
