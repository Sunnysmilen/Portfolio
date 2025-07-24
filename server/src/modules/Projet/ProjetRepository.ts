import databaclient, { type Result, type Rows } from "../../../database/client";
import type { projetType } from "../../Definitions/Projet";

class ProjetRepository {
  // create
  async create(projets: Omit<projetType, "id">) {
    const [result] = await databaclient.query<Result>(
      "INSERT INTO projets (projet,description,skills_id,tech_categories,tech_logo,tech_name) VALUES (?,? ,?,?,?,?)",
      [
        projets.projet,
        projets.description,
        projets.skills_id,
        projets.tech_categories,
        projets.tech_logo,
        projets.tech_name,
      ],
    );
    return result.insertId;
  }

  async readAll() {
    const [rows] =
      await databaclient.query<Rows>(`SELECT projets.*,technologies.name AS tech_name, technologies.logo AS tech_logo,
        competences.categories AS tech_categories FROM projets        
        INNER JOIN skills ON projets.skills_id = skills.id
        INNER JOIN  technologies ON skills.technologies_id = technologies.id
        INNER JOIN competences ON skills.competence_id = competences.id`);
    return rows as projetType[];
  }

  async read(id: number) {
    const [rows] = await databaclient.query<Rows>(
      "select * from projets where id = ?",
      [id],
    );
    return rows[0] as projetType;
  }

  //update
  async update(projet: projetType) {
    const [result] = await databaclient.query<Result>(
      "UPDATE projets SET projet = ?, description = ?,skills_id = ?,tech_categories = ?,tech_logo = ?,tech_name = ? where id = ?",
      [
        projet.projet,
        projet.description,
        projet.skills_id,
        projet.tech_categories,
        projet.tech_logo,
        projet.tech_name,
        projet.id,
      ],
    );
    return result.affectedRows;
  }

  // DELETE

  async delete(projetId: number) {
    const [result] = await databaclient.query<Result>(
      "DELETE from projets where id = ?",
      [projetId],
    );
    return result.affectedRows;
  }
}

export default new ProjetRepository();
