import type { RequestHandler } from "express";
import HomepageRespository from "./HomepageRespository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    const homepage = await HomepageRespository.readAll();
    res.json(homepage);
  } catch (err) {
    next(err);
  }
};

export default { browse };
