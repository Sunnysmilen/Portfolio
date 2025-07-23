import { Element } from "react-scroll";
import TechnologiesCard from "../Cards/TechnologiesCard";

export default function Technologies() {
  return (
    <>
      <Element name="technologies">
        <header>Technologies</header>
        <section>
          <button type="button">Compétences ex:front-end,back-end,etc...</button>
          <TechnologiesCard />
        </section>
      </Element>
    </>
  );
}
