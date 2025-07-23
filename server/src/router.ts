import express from "express";
import ProjetAction from "../../server/src/modules/Projet/ProjetAction";
import HomepageActions from "./modules/homepage/HomepageActions";

const router = express.Router();

router.get("/candidat", HomepageActions.browse);

router.get("/projets", ProjetAction.browse);

export default router;
