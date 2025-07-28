import { useCallback, useEffect, useState } from "react";
import type { projetType } from "../../../server/src/Definitions/Projet";
import "../assets/styles/projets.css";
import Addprojet from "../components/Projet/Addprojet";
import DeleteProjet from "../components/Projet/DeleteProjet";
import EditProjet from "../components/Projet/EditProjet";

export default function Project() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [projet, setProjet] = useState<projetType[]>([]);
  const [index, setIndex] = useState(0);
  const [discover, setDiscover] = useState<number | undefined>(undefined);

  const prev = () =>
    setIndex((prevIndex) =>
      prevIndex === 0 ? projet.length - 1 : prevIndex - 1,
    );
  const next = () =>
    setIndex((prevIndex) =>
      prevIndex === projet.length - 1 ? 0 : prevIndex + 1,
    );

  if (projet.length > 0 && index >= 0 && index < projet.length) {
  } else {
    console.error("Projet non disponible à cet index");
  }

  const fetchAllProjet = useCallback(async () => {
    const res = await fetch(`${API_URL}/projets`);
    const data = await res.json();
    setProjet(data);
    setIndex(0);
  }, []);

  useEffect(() => {
    fetchAllProjet();
  }, [fetchAllProjet]);

  return (
    <>
      <section className="section_projets">
        <header className="projets">Mes projets</header>

        <div className="group_button_actions">
          <Addprojet onAdd={fetchAllProjet} />
          <EditProjet onUpdate={fetchAllProjet} />
          <DeleteProjet onUpdate={fetchAllProjet} />
        </div>

        {projet.length === 0 && <p>Aucune projet en cours</p>}
        {projet.length > 0 && index >= 0 && index < projet.length && (
          <section key={projet[index].id} className="card_projet">
            <img src={projet[index].projet} alt={projet[index].projet} />
            <h1>{projet[index].projet}</h1>
            <button
              type="button"
              onClick={() =>
                setDiscover(
                  discover === projet[index].id ? undefined : projet[index].id,
                )
              }
            >
              {discover === projet[index].id ? "Réduire" : "Découvrir plus"}
            </button>
            {discover === projet[index].id && (
              <p>{projet[index].description}</p>
            )}
          </section>
        )}
        <button type="button" onClick={prev}>
          ◀
        </button>
        <button type="button" onClick={next}>
          ▶
        </button>
      </section>
    </>
  );
}
