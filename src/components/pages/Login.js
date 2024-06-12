// import { useNavigate } from "react-router-dom";
// import { api } from "../../services/api";
// import TestForm from "../test/TestForm";
import {useState} from "react";
import styles from "./Login.module.css";

function Login() {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleLogin = () => {
    if (!email) {
      setMessage('O campo de login deve ser preenchido.');
      return;
    }
    if (!validateEmail(email)) {
      setMessage('O login deve ter formato de e-mail válido.');
      return;
    }
    if (!password) {
      setMessage('O campo de senha deve ser preenchido.');
      return;
    }
    setMessage('Validação realizada com sucesso');
    // Navegar para a página de conteúdo
  };

  const handleClear = () => {
    setEmail('');
    setPassword('');
    setMessage('');
  };
  
    return (
        <div className={styles.login_page}>
          <h1>Login</h1>
          <div className={styles.login_form}>
            <label>Email:</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Senha:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className={styles.button_group}>
              <button onClick={handleLogin}>Realizar Login</button>
              <button onClick={handleClear}>Limpar</button>
            </div>
            {message && <p className={styles.message}>{message}</p>}
          </div>
          <div className={styles.links}>
            <a href="/trocar-senha">Trocar senha</a>
            <a href="/register">Cadastro de cliente</a>
          </div>
        </div>
      );
    }

  export default Login;