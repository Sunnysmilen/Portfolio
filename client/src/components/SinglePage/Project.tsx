import { useEffect, useState } from "react";
import { Element } from "react-scroll";
import type { projetType } from "../../../../server/src/Definitions/Projet";
import "../../assets/styles/projets.css";

export default function Project() {
  const [projet, setProjet] = useState<projetType[]>([]);
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((prevIndex) =>
      prevIndex === 0 ? projet.length - 1 : prevIndex - 1,
    );
  const next = () =>
    setIndex((prevIndex) =>
      prevIndex === projet.length - 1 ? 0 : prevIndex + 1,
    );

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/projets`)
      .then((response) => response.json())
      .then((data: projetType[]) => {
        setProjet(data);
      });
  }, []);

  return (
    <>
      <Element name="project">
        <section className="section_projets">
          <header className="projets">Mes projets</header>{" "}
          {projet.length > 0 && (
            <section key={projet[index].id} className="card_projet">
              <img src="null" alt="Projet preview" />
              <h1>{projet[index].projet}</h1>
              <p>{projet[index].tech_categories}</p>
              <button type="button">Découvrir plus</button>
              {/* A la suite du clique : agrandissement de la carte pour voir la descritpion */}
              <p>{projet[index].description}</p>
            </section>
          )}
          <button type="button" onClick={prev}>◀</button>
          <button type="button" onClick={next}>▶</button>
        </section>
      </Element>
    </>
  );
}
