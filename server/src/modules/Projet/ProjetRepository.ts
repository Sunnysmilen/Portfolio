import databaclient, { type Rows } from "../../../database/client";
import type { projetType } from "../../Definitions/Projet";

class ProjetRepository {
  async readAll() {
    const [rows] =
      await databaclient.query<Rows>(`SELECT projets.*,technologies.name AS tech_name, technologies.logo AS tech_logo,
        competences.categories AS tech_categories FROM projets        
        INNER JOIN skills ON projets.skills_id = skills.id
        INNER JOIN  technologies ON skills.technologies_id = technologies.id
        INNER JOIN competences ON skills.competence_id = competences.id`);
    return rows as projetType[];
  }
}

export default new ProjetRepository();
