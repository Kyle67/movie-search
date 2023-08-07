import { NextFunction, Request, Response } from "express";
import { MovieModel } from "../models/Movies";

const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.render("index", { title: "Express" });
});

router.get(
  // TODO: Add validation
  "/movies",
  async (req: Request, res: Response, next: NextFunction) => {
    const searchQuery = req.query.searchQuery;

    // Testing

    const movies = await MovieModel.find({
      title: { $regex: searchQuery, $options: "i" },
    }).limit(30);

    res.send({ movies });
  }
);

module.exports = router;
