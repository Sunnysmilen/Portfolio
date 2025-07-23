import { Element } from "react-scroll";

export default function Project() {
  return (
    <>
      <Element name="project">
        <section>
          {/* Effet sliding de projet */}
          <section>
            <img src="" alt="Projet preview" />
            <h1>Title projet</h1>
            <p>Techno utilisé</p>
            <button type="button">Découvrir plus</button>
            {/* A la suite du clique : agrandissement de la carte pour voir la descritpion */}
            <p>Description du projet</p>
          </section>
        </section>
      </Element>
    </>
  );
}
