import { Element } from "react-scroll";
import "../assets/styles/homepage.css";

export default function Homepage() {
  return (
    <>
      <Element name="homepage">
        <section className="Home">
          <h1>Nicole DAVID</h1>
          <h2>Développeuse Web</h2>
          <p>Découvrez mon parcours de développeuse web</p>
          <p>Disponible</p>
          <button type="button">Contactez-moi</button>
        </section>
      </Element>
    </>
  );
}
