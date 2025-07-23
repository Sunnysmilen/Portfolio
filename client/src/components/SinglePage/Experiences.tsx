import { Element } from "react-scroll";

export default function Experiences() {
  return (
    <>
      <Element name="experiences">
        <section>
          <header>Expériences</header>
          <section>
            <h1>Job</h1>
            <h2>Etablissements</h2>
            <h3>Dates</h3>
            <button type="button">Découvrir plus</button>
            {/* A la suite du clique : agrandissement de la carte pour voir la descritpion */}
            <p>Description expériences</p>
          </section>
        </section>
      </Element>
    </>
  );
}
