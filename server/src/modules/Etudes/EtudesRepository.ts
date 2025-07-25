import databaseClient, { type Rows } from "../../../database/client";
import type { candidatType } from "../../Definitions/Candidat";

class EtudesRepository {
  async readAll() {
    const [rows] =
      await databaseClient.query<Rows>(`SELECT candidat.* ,etudes.* FROM etudes
        LEFT JOIN candidat ON etudes.candidat_id = candidat_id`);
    return rows as candidatType[];
  }
}

export default new EtudesRepository();
