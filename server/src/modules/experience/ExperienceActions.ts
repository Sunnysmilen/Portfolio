import type { RequestHandler } from "express";
import HomepageRespository from "./ExperienceRepository";
import ExperienceRepository from "./ExperienceRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    const experiences = await ExperienceRepository.readAll();
    res.json(experiences);
  } catch (err) {
    next(err);
  }
};

export default { browse };
