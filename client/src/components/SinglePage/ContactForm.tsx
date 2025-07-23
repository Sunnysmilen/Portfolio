import { Element } from "react-scroll";

export default function ContactForm() {
  return (
    <>
      <Element name="experiences">
        <section>
          <header>Contact Form</header>
          <form action="">
            <label htmlFor="">Nom</label>
            <input type="text" />
            <label htmlFor="">Prénom</label>
            <input type="text" />
            <label htmlFor="">Email</label>
            <input type="text" />
            <select name="Objet" id="objet">
              <option value="">Sujet de votre message</option>
              <option value="entreprise">Entreprise</option>
              <option value="entreprise">Entreprise</option>
              <option value="questions">Questions</option>
              <option value="autres sujets">Autres sujets</option>
            </select>
            <label htmlFor="">Message</label>

            <input type="text" />
            <input type="submit" name="Envoyer" />
          </form>
        </section>
      </Element>
    </>
  );
}
