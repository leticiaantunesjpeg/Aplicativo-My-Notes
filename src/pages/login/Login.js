import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, isPending, login } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return !isPending ? (
    <form onSubmit={handleSubmit} className="login-form">
      <h2>Login</h2>
      <label>
        <span>Email</span>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
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
      {error ? (
        <p>{error} Por favor, recarregue a página.</p>
      ) : (
        <button className="botao">Login</button>
      )}
    </form>
  ) : (
    <p>Carregando...</p>
  );
}
