import express from "express";
import HomepageActions from "./modules/homepage/HomepageActions";

const router = express.Router();

router.get("/candidat", HomepageActions.browse);

export default router;
