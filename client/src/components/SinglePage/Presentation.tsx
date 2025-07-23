import { Element } from "react-scroll";
import avatar from "../../assets/images/avatar.jpeg";

export default function Presentation() {
  return (
    <>
      <Element name="presentation">
        <section>
          <header>A propos de moi</header>
          <img src={avatar} alt="Avatar Nicole DAVID" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
            placeat suscipit dolorum harum optio debitis perspiciatis tempora,
            temporibus ipsum impedit natus deleniti minima omnis, error
            perferendis, ea mollitia esse adipisci!
          </p>
        </section>
      </Element>
    </>
  );
}
