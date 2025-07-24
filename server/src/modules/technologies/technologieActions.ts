import type { RequestHandler } from "express";
import technologieRepository from "./technologieRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    const technologie = await technologieRepository.readAll();
    res.json(technologie);
  } catch (err) {
    next(err);
  }
};

//add
const add: RequestHandler = async (req, res, next) => {
  try {
    const newTechno = {
      technologie_id: req.body.technologie_id,
      competence_id: req.body.competence_id,
      t_name: req.body.t_name,
      t_logo: req.body.t_logo,
      t_categories: req.body.t_categories,
    };

    const insert = await technologieRepository.create(newTechno);
    res.status(201).json({ insert });
  } catch (err) {
    next(err);
  }
};

export default { browse, add };
