import databaclient, { type Result, type Rows } from "../../../database/client";
import type { projetType } from "../../Definitions/Projet";

class ProjetRepository {
  // create
  async create(projets: Omit<projetType, "id">) {
    const [result] = await databaclient.query<Result>(
      "INSERT INTO projets (projet,description) VALUES (?,?)",
      [projets.projet, projets.description],
    );
    return result.insertId;
  }

  async readAll() {
    const [rows] = await databaclient.query<Rows>("SELECT * FROM projets");
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
      "UPDATE projets SET projet = ?, description = ? where id = ?",
      [projet.projet, projet.description, projet.id],
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
