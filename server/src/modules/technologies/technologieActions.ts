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

const read: RequestHandler = async (req, res, next) => {
  try {
    const insertId = Number(req.params.id);
    const tech = await technologieRepository.read(insertId);
    if (tech == null) {
      res.sendStatus(404);
    } else {
      res.send(tech);
    }
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

const edit: RequestHandler = async (req, res, next) => {
  try {
    const editTech = {
      id: Number(req.params.id),
      t_name: req.body.t_name,
      t_logo: req.body.t_logo,
      t_categories: req.body.t_categories,
      technologie_id: req.body.technologie_id,
      competence_id: req.body.competence_id,
    };
    const affectedRows = await technologieRepository.update(editTech);
    if (affectedRows == null) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    next(err);
  }
};
const destroy: RequestHandler = async (req, res, next) => {
  try {
    const oldTech = Number(req.params.id);
    await technologieRepository.delete(oldTech);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

export default { browse, read, add, edit, destroy };
