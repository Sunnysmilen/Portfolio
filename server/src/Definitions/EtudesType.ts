import type { candidatType } from "./Candidat";

type etudeType = {
  id: string;
  name: string;
  year: string;
  etablissement: string;
  synthese_etude: string;
  candidat_id: number;
  candidatType: candidatType;
};

export default etudeType;
