import { Element } from "react-scroll";
import "../../assets/styles/contact.css";
import { ValidationError, useForm } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xldlbjlw");
  if (state.succeeded) {
    return (
      <p className="envoi_message">Merci, votre message a bien été envoyé !</p>
    );
  }

  return (
    <>
      <Element name="experiences">
        <section>
          <header className="contact_section">Contact Form</header>
          <form onSubmit={handleSubmit} className="contact_form ">
            <label htmlFor="nom">Nom</label>
            <input type="text" name="nom" required />
            <ValidationError prefix="Nom" field="nom" errors={state.errors} />

            <label htmlFor="email">Email</label>
            <input type="email" name="email" required />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />

            <label htmlFor="message">Message</label>
            <textarea name="message" required />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />

            <button type="submit" disabled={state.submitting}>
              Envoyer
            </button>
          </form>
        </section>
      </Element>
    </>
  );
}
