import { type FormEventHandler, useCallback, useEffect, useState } from "react";

export default function Addprojet({ onAdd }: { onAdd: () => void }) {
  const API_URL = import.meta.env.VITE_API_URL;
  const [formVisible, setFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    projet: "",
    description: "",
  });

  // fetch tous les projets
  const fetchAllProjet = useCallback(async () => {
    const res = await fetch(`${API_URL}/projets`);
    const data = await res.json();
    console.log(data);
  }, []);

  useEffect(() => {
    fetchAllProjet();
  }, [fetchAllProjet]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit: FormEventHandler = async (event) => {
    event.preventDefault();

    const validDescription = formData.description.length >= 10;
    if (!validDescription) {
      alert("La description est trop courte!(au minimum 10 caractères)");
      return;
    }

    const confirmAdd = confirm("Voulez-vous vraiment ajouter ce projet ?");
    if (!confirmAdd) {
      alert("Ajout annulé !");
      return;
    }
    try {
      const res = await fetch(`${API_URL}/projets`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        const errMessage = await res.text();
        throw new Error(`Erreur ${res.status}: ${errMessage}`);
      }
      setFormData({ projet: "", description: "" });
      setFormVisible(false);
      await onAdd();
    } catch (error) {
      console.error("Erreur add de projet :", error);
    }
  };

  return (
    <>
      <div className="edit-projet-container">
        <button type="button" onClick={() => setFormVisible((prev) => !prev)}>
          {formVisible ? "Annuler" : "Ajouter un projet"}
        </button>

        {formVisible && (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="projet"
              value={formData.projet}
              onChange={handleChange}
              required
              placeholder="Remplir le nom du projet"
            />
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              placeholder="Remplir une synthèse du projet"
              title="Décrivez au minimum de 10 caractères votre projet"
            />
            <button type="submit">Enregistrer</button>
          </form>
        )}
      </div>
    </>
  );
}
