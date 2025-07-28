import express from "express";
import EtudeActions from "../../server/src/modules/Etudes/EtudeActions";
import ProjetAction from "../../server/src/modules/Projet/ProjetAction";
import { validateProjet } from "./middleware/Validations";
import ExperienceActions from "./modules/experience/ExperienceActions";
import HomepageActions from "./modules/homepage/HomepageActions";
import technologieActions from "./modules/technologies/technologieActions";

const router = express.Router();

router.get("/candidat", HomepageActions.browse);

router.get("/projets", ProjetAction.browse);
router.get("/projets/:id", ProjetAction.read);
router.post("/projets", validateProjet, ProjetAction.add);
router.put("/projets/:id", ProjetAction.edit);
router.delete("/projets/:id", ProjetAction.destroy);

router.get("/competences", technologieActions.browse);
// router.get("/competences/:id", technologieActions.read);
// router.post("/competences", technologieActions.add);
// router.put("/competences/:id", technologieActions.edit);
// router.delete("/competences/:id", technologieActions.destroy);

router.get("/etudes", EtudeActions.browse);

router.get("/experiences", ExperienceActions.browse);

export default router;
