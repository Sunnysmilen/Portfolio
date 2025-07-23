import databaseClient, { type Rows } from "../../../database/client";
import type { candidatType } from "../../Definitions/Candidat";

class HomepageRepository {
  async readAll() {
    const [rows] =
      await databaseClient.query<Rows>(`SELECT candidat.*,statut.name AS name, statut.description AS introduction  FROM candidat
        INNER JOIN statut ON candidat.statut_id = statut_id`);
    return rows as candidatType[];
  }
}

export default new HomepageRepository();
