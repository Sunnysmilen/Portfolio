import { useCallback, useEffect, useState } from "react";
import "../../assets/styles/formadd_edit.css";
import type { projetType } from "../../../../server/src/Definitions/Projet";

type EditProjetProps = {
  onUpdate: () => void;
};

export default function EditProjet({ onUpdate }: EditProjetProps) {
  const [items, setItems] = useState<projetType[]>([]);
  const [editprojet, setEditProjet] = useState<projetType | undefined>(
    undefined,
  );
  const [showForm, setShowForm] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL;

  // fetch tous les projets
  const fetchAllprojet = useCallback(async () => {
    const res = await fetch(`${API_URL}/projets`);
    const data = await res.json();
    setItems(data);
  }, []);

  // Update un projet

  const updateProjet = async (_p0: string) => {
    if (!editprojet) return;

    const confirmEdit = confirm("Voulez-vous vraiment modifier ce projet ?");
    if (!confirmEdit) return;

    try {
      const res = await fetch(`${API_URL}/projets/${editprojet.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editprojet),
      });
      if (!res.ok) {
        const errMessage = await res.text();
        throw new Error(`Erreur ${res.status}: ${errMessage}`);
      }
      const text = await res.text();
      const update = text ? JSON.parse(text) : {};

      console.log(update);
      await onUpdate();
      fetchAllprojet();
      setEditProjet(undefined);
      fetchAllprojet();
    } catch (error) {
      console.error("Erreur update de projet :", error);
    }
  };

  useEffect(() => {
    fetchAllprojet();
  }, [fetchAllprojet]);

  return (
    <>
      <div className="edit-projet-container">
        <button type="button" onClick={() => setShowForm((prev) => !prev)}>
          {showForm ? "Annuler" : "Modifier un projet"}
        </button>
        {showForm &&
          items.map((item) => (
            <div key={item.id}>
              <p>{item.projet}</p>
              <button type="button" onClick={() => setEditProjet(item)}>
                {editprojet ? "Fermer" : "Modifier"}
              </button>
            </div>
          ))}
      </div>
      {editprojet && (
        <div className="form-container">
          <h3>Modifier le projet : {editprojet.projet}</h3>
          <input
            type="text"
            value={editprojet.projet}
            onChange={(e) =>
              setEditProjet({ ...editprojet, projet: e.target.value })
            }
          />
          <input
            type="text"
            value={editprojet.description}
            onChange={(e) =>
              setEditProjet({ ...editprojet, description: e.target.value })
            }
          />

          <button
            type="button"
            onClick={() => {
              updateProjet("");
            }}
          >
            Enregistrer
          </button>

          <button type="button" onClick={() => setEditProjet(undefined)}>
            Annuler
          </button>
        </div>
      )}
    </>
  );
}
