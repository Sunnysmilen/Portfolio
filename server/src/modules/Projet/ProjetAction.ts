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

// read
const read: RequestHandler = async (req, res, next) => {
  try {
    const insertId = Number(req.params.id);
    const home = await ProjetRepository.read(insertId);
    if (home == null) {
      res.sendStatus(404);
    } else {
      res.send(home);
    }
  } catch (err) {
    next(err);
  }
};

//edit
const edit: RequestHandler = async (req, res, next) => {
  try {
    const home = {
      id: Number(req.params.id),
      projet: req.body.projet,
      description: req.body.description,
    };
    const affectedRows = await ProjetRepository.update(home);
    if (affectedRows == null) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    next(err);
  }
};

//add
const add: RequestHandler = async (req, res, next) => {
  try {
    const newproject = {
      projet: req.body.projet,
      description: req.body.description,
    };
    const insert = await ProjetRepository.create(newproject);
    res.status(201).json({ insert });
  } catch (err) {
    next(err);
  }
};

//delete

const destroy: RequestHandler = async (req, res, next) => {
  try {
    const homeId = Number(req.params.id);
    await ProjetRepository.delete(homeId);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};
export default { browse, read, edit, add, destroy };
