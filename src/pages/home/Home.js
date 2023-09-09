import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useCollection } from "../../hooks/useCollection";
import Nota from "./Nota";
import NotaForm from './NotaForm';


export default function Home() {
  const [showAdd, setShowAdd] = useState(false);
  const { user } = useAuthContext();
  const { documents, error } = useCollection(
    "notes",
   ['uid', '==', user.uid],
   ["createdAt", "desc"]);
  return (
    <div>
      <NotaForm show={showAdd} setShowAdd={setShowAdd} uid={user.uid} />
      {error && <p>{error}</p>}
      {document &&  <Nota notes={documents} />}
      {!showAdd && (
        <a className="botao-fixo" href>
          <div className="botao-add" onClick={() => setShowAdd(true)}>
            <FontAwesomeIcon icon={faPlus} />
          </div>
        </a>
      )}
    </div>
  );
}
