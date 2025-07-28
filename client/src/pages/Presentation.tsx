import { useEffect, useState } from "react";
import type { candidatType } from "../../../server/src/Definitions/Candidat";
import "../assets/styles/presentation.css";
import avatar from "../assets/images/avatar.jpeg";

export default function Presentation() {
  const [user, setUser] = useState<candidatType[]>([]);
  const presentation = [
    ...new Set(user.filter((stat) => stat.name === "Disponible immédiatement")),
  ];

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/candidat`)
      .then((response) => response.json())
      .then((data: candidatType[]) => {
        setUser(data);
      });
  }, []);

  return (
    <>
      {presentation.map((user) => (
        <section key={user.id} className="section_presentation">
          <header className="Title">A propos de moi</header>
          <img
            src={avatar}
            alt={`Avatar ${user.firstname} ${user.lastname}`}
            className="Avatar"
          />
          <p className="presentation_description">{user.description}</p>
        </section>
      ))}
    </>
  );
}
