import databaseClient, { type Rows } from "../../../database/client";
import type experienceType from "../../Definitions/ExperienceType";

class HomepageRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM experiences",
    );
    return rows as experienceType[];
  }
}

export default new HomepageRepository();
