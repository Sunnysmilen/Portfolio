import { useEffect, useState } from "react";
import { Element } from "react-scroll";
import type experienceType from "../../../../server/src/Definitions/ExperienceType";
import "../../assets/styles/Experiences.css";

export default function Experiences() {
  const [occupation, setOccupation] = useState<experienceType[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/experiences`)
      .then((response) => response.json())
      .then((data: experienceType[]) => {
        setOccupation(data);
      });
  }, []);

  return (
    <>
      <Element name="experiences">
        <section className="experience_container">
          <header className="experience_section">Expériences</header>
          {occupation.map((o) => (
            <section key={o.id} className="experience_card">
              <h1 className="experience_poste">{o.poste}</h1>
              <h2 className="experience_lieu">{o.lieu}</h2>
              <h3 className="experience_annee">{o.annee}</h3>
            </section>
          ))}
        </section>
      </Element>
    </>
  );
}
