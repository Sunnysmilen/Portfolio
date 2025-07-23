import type { RequestHandler } from "express";
import ProjetRepository from "./ProjetRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    const homepage = await ProjetRepository.readAll();
    res.json(homepage);
  } catch (err) {
    next(err);
  }
};

export default { browse };
