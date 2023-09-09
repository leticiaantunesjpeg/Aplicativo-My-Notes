//react
import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";
import "./Cadastro.css";

export default function Cadastro() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const { signup, error, isPending } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, name);
    setEmail('')
    setName('')
    setPassword('')
  };

  return (
    <div>
      {!isPending?(<form onSubmit={handleSubmit} className="cadastro-form">
        <h2>Cadastro</h2>
        <label>
          <span>Email</span>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          <span>Nome</span>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <label>
          <span>Senha</span>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        {error? <p>{error} Por favor, recarregue a página.</p> : <button className="botao">Cadastre</button>}
      </form>) : (<p>Carregando...</p>)}
      

    </div>
  );
}
