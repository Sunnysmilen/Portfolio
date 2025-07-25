import { useEffect, useState } from "react";
import { Element } from "react-scroll";
import type etudeType from "../../../../server/src/Definitions/EtudesType";
import "../../assets/styles/etudes.css";

export default function Etudes() {
  const [learn, setLearn] = useState<etudeType[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/etudes`)
      .then((response) => response.json())
      .then((data: etudeType[]) => {
        setLearn(data);
      });
  }, []);

  console.log(learn);
  const [openCard, setOpenCard] = useState<string | null>(null);

  const toggleCard = (id: string) => {
    setOpenCard((prev) => (prev === id ? null : id));
  };
  return (
    <>
      <Element name="etudes">
        <section className="etude_container">
          <header>Formations</header>
          {learn.map((l) => (
            <section key={l.id} className="etudes_card">
              <h1>{l.name}</h1>
              <h2>{l.etablissement}</h2>
              <h3>{l.year}</h3>
              <button
                type="button"
                onClick={() => toggleCard(l.id)}
                className="decouvrir_plus"
              >
                {openCard === l.id ? "Réduire" : "Découvrir plus"}
              </button>

              {openCard === l.id && (
                <p className="description">{l.synthese_etude}</p>
              )}
            </section>
          ))}
        </section>
      </Element>
    </>
  );
}
