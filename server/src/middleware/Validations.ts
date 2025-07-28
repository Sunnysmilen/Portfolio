import type { RequestHandler } from "express";
import z from "zod";

const validateProjet: RequestHandler = (req, res, next) => {
  const { projet, description } = req.body;

  const newprojet = z.object({
    projet: z.string().min(2),
    description: z.string().min(10),
  });

  const validData = newprojet.safeParse(req.body);

  if (!validData.success) {
    res.sendStatus(422);
  } else {
    next();
  }
};

export { validateProjet };
