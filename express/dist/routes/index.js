"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Movies_1 = require("../models/Movies");
const express = require("express");
const router = express.Router();
/* GET home page. */
router.get("/", (req, res, next) => {
    res.render("index", { title: "Express" });
});
router.get(
// TODO: Add validation
"/movies", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const searchQuery = req.query.searchQuery;
    const movies = yield Movies_1.MovieModel.find({
        title: { $regex: searchQuery, $options: "i" },
    }).limit(30);
    res.send({ movies });
}));
module.exports = router;
