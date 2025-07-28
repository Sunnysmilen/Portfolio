import type { RequestHandler } from "express";
import EtudesRepository from "./EtudesRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    const education = await EtudesRepository.readAll();
    res.json(education);
  } catch (err) {
    next(err);
  }
};

export default { browse };
