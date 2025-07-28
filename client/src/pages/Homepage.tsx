import "../assets/styles/homepage.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import type { candidatType } from "../../../server/src/Definitions/Candidat";

export default function Homepage() {
  const [user, setUser] = useState<candidatType[]>([]);

  // Statut : "Disponible immédiatement" , "Recherche Alternance", "Recherche poste"
  const disponible = [
    ...new Set(user.filter((stat) => stat.name === "Disponible immédiatement")),
  ];

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/candidat`)
      .then((response) => response.json())
      .then((data: candidatType[]) => {
        setUser(data);
      });
  }, []);

  return (
    <>
      <section className="Home">
        {disponible.map((u) => (
          <span key={u.id}>
            <h1 className="firstname_lastname">
              {u.firstname} {u.lastname}
            </h1>
            <h2>{u.metier}</h2>
            <p className="introduction">{u.introduction}</p>
            <p>{u.name}</p>
          </span>
        ))}
        <button
          type="button"
          onClick={() => navigate("/contact")}
          className="button_contact_moi"
        >
          Contactez-moi
        </button>
      </section>
    </>
  );
}
