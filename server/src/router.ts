import express from "express";
import ProjetAction from "../../server/src/modules/Projet/ProjetAction";
import HomepageActions from "./modules/homepage/HomepageActions";
import technologieActions from "./modules/technologies/technologieActions";

const router = express.Router();

router.get("/candidat", HomepageActions.browse);

router.get("/projets", ProjetAction.browse);

router.get("/competences", technologieActions.browse);
router.get("/competences", technologieActions.add);

export default router;
