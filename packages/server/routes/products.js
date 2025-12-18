import express from "express";
import db from "../db/connection.mjs";

const router = express.Router();

// Middleware to verify X-Client-Version header
router.use((req, res, next) => {
  const clientVersion = req.get("X-Client-Version");
  if (!clientVersion) {
    return res.status(400).json({ error: "Missing X-Client-Version header" });
  }
  next();
});

router.get("/", async (req, res) => {

  let collection = await db.collection("products");
  let results = await collection.find({})
    .toArray();

  res.send(results).status(200);
});

export default router;