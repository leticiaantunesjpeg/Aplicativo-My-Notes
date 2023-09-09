import "./Nota.css";
import { useFirestore } from "../../hooks/useFirestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

export default function Nota({ notes }) {
  const { deleteDocument } = useFirestore("notes");

  return (
    <div className="notas-grid">
      {notes.map((note) => {
        return (
          <div key={note.id} className="container">
            <div className="conteudo">
              <button
                onClick={() => {
                  deleteDocument(note.id);
                }}
              >
                <FontAwesomeIcon icon={faTrashAlt} />
              </button>
              <h3>{note.title}</h3>
              <p>{note.note}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
