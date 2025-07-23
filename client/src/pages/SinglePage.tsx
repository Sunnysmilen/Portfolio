import Homepage from "../components/Homepage";
import Presentation from "../components/Presentation";

export default function SinglePage() {
  return (
    <>
      <div className="container">
        <Homepage />
        <Presentation />
        <section id="thirdsection">
          <h1>Third Section</h1>
          Third Section
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
            optio error commodi distinctio! Accusantium obcaecati, voluptatum
            quo inventore voluptatem officiis dicta, quae, quisquam dolor
            reiciendis suscipit. Voluptatibus illum repellat aperiam.
          </p>
        </section>
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
