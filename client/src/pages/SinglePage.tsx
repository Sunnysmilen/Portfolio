import Homepage from "../components/SinglePage/Homepage";
import Presentation from "../components/SinglePage/Presentation";
import Project from "../components/SinglePage/Project";

export default function SinglePage() {
  return (
    <>
      <div className="container">
        <Homepage />
        <Presentation />
        <Project/>
        <section id="fourthsection">
          <h1>Fourth Section</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
            optio error commodi distinctio! Accusantium obcaecati, voluptatum
            quo inventore voluptatem officiis dicta, quae, quisquam dolor
            reiciendis suscipit. Voluptatibus illum repellat aperiam.
          </p>
        </section>
      </div>
    </>
  );
}
