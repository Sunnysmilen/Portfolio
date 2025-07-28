import { useCallback, useEffect, useState } from "react";
import type { projetType } from "../../../../server/src/Definitions/Projet";

export default function DeleteProjet({ onUpdate }: { onUpdate: () => void }) {
  const API_URL = import.meta.env.VITE_API_URL;
  const [items, setItems] = useState<projetType[]>([]);
  const [deleteProjet, setDeleteProjet] = useState(false);

  const AllProject = useCallback(async () => {
    const res = await fetch(`${API_URL}/projets`);
    const data = await res.json();
    setItems(data);
  }, []);
  const handleDelete = async (id: number) => {
    const confirmDelete = confirm("Voulez-vous vraiment supprimer ce projet ?");
    if (!confirmDelete) return;

    const res = await fetch(`${API_URL}/projets/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      setItems((prev) => prev.filter((projet) => projet.id !== id));
      onUpdate();
    } else {
      alert("Échec de la suppression");
    }
  };

  useEffect(() => {
    AllProject();
  }, [AllProject]);

  return (
    <>
      <button type="button" onClick={() => setDeleteProjet((prev) => !prev)}>
        {deleteProjet ? "Fermer" : "Supprimer"}
      </button>

      {deleteProjet &&
        items.map((projet) => (
          <div key={projet.id}>
            <p>{projet.projet}</p>
            <button
              type="button"
              onClick={() => {
                handleDelete(projet.id);
              }}
            >
              Supprimer
            </button>
          </div>
        ))}
    </>
  );
}
