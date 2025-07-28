import databaclient, { type Result, type Rows } from "../../../database/client";
import type { technologieType } from "../../Definitions/TechnologieType";

class TechnologieRepository {
  // create
  async create(skills: Omit<technologieType, "id">) {
    const [result] = await databaclient.query<Result>(
      "INSERT INTO projets (name,logo,categories,technologie_id,competence_id) VALUES (?,?,?,?,?)",
      [
        skills.t_name,
        skills.t_logo,
        skills.t_categories,
        skills.technologie_id,
        skills.competence_id,
      ],
    );
    return result.insertId;
  }

  async readAll() {
    const [rows] = await databaclient.query<Rows>(`SELECT 
  competences.categories AS t_categories,
  technologies.name AS t_name, 
  technologies.logo AS t_logo
FROM competences
LEFT JOIN skills ON skills.competence_id = competences.id
LEFT JOIN technologies ON skills.technologies_id = technologies.id`);
    return rows as technologieType[];
  }
  async read(id: number) {
    const [rows] = await databaclient.query<Rows>(
      "select * from skills where id = ?",
      [id],
    );
    return rows[0] as technologieType;
  }

  //update
  async update(skills: technologieType) {
    const [result] = await databaclient.query<Result>(
      "UPDATE skills SET name = ?, logo = ?,categories = ?,technologie_id = ?,competence_id = ? WHERE id = ?",
      [
        skills.t_name,
        skills.t_logo,
        skills.t_categories,
        skills.technologie_id,
        skills.competence_id,
        skills.id
      ],
    );
    return result.affectedRows;
  }

  // DELETE

  async delete(techID: number) {
    const [result] = await databaclient.query<Result>(
      "DELETE from projets where id = ?",
      [techID],
    );
    return result.affectedRows;
  }
}

export default new TechnologieRepository();
