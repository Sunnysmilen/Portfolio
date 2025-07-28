import type { RequestHandler } from "express";
import contactRepository from "./contactRepository.ts";

const browse: RequestHandler = async (req, res, next) => {
  try {
    const newEmail = await contactRepository.readAll();
    res.json(newEmail);
  } catch (err) {
    next(err);
  }
};

export default { browse };
