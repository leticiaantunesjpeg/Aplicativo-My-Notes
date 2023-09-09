import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";
import "./Menu.css";

export default function Menu() {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  return (
    <nav className="menu">
      <ul>
        <li className="titulo"> Aplicativo My Notes</li>

        {!user && (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/cadastro">Cadastro</Link>
            </li>
          </>
        )}

        {user && (
          <>
          <li>
            <p className="titulo-nome">Olá, {user.displayName}!</p>
          </li>
          <li>
          <button className="botao" onClick={logout}>
            Sair
          </button>
        </li>
          </>
        )}
      </ul>
    </nav>
  );
}
