import { useState } from "react";
import { useFirestore } from "../../hooks/useFirestore";
import "./NotaForm.css";

export default function NotaForm({ show, setShowAdd, uid }) {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const { addDocument } = useFirestore("notes");

  const handleSubmit = (e) => {
    e.preventDefault();
    addDocument({ title, note, uid });
    setTitle("");
    setNote("");
    setShowAdd(false);
  };

  return (
    <div className={`${show ? "mostrarModal" : ""} ${"modal"}`}>
      <div className="conteudoModal">
        <form onSubmit={handleSubmit}>
          <span
            className="botaoFechar"
            onClick={() => {
              setShowAdd(false);
            }}
          >
            ×
          </span>
          <label>
            <span>Titulo</span>
            <input
              type="text"
              required
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </label>
          <label>
            <span>Nota</span>
            <textarea
              required
              onChange={(e) => setNote(e.target.value)}
              value={note}
            />
          </label>
          <button>Adicionar Nota</button>
        </form>
      </div>
    </div>
  );
}
