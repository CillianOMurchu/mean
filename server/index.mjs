import express from "express";
import cors from "cors";
import "./load-environment.mjs";
import "express-async-errors";
import products from "./routes/products.js";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Peach Nutrition API" });
});

// Load the /products routes
app.use("/api/v1/products", products);

// Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send("Uh oh! An unexpected error occured.")
})

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});