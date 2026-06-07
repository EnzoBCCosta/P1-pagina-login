import { useState, useEffect } from "react";
import styles from "./Login.module.css";

import logoDC from "./assets/discord-white-icon.png";
import QRcode from "./assets/qr-code.png";
import DCQRlogo from "./assets/dc-logo-qr.png";

function App() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [dispararValidacao, setDispararValidacao] = useState(false);
  const [primeiroCarregamento, setPrimeiroCarregamento] = useState(true);

  useEffect(() => {
    if (primeiroCarregamento) {
      setPrimeiroCarregamento(false);
      return;
    }

    console.log(`login -> E-mail: ${email} | Senha: ${senha}`);

    const emailCorreto = "discord.login@gmail.com";
    const senhaCorreta = "123456";

    if (email === emailCorreto && senha === senhaCorreta) {
      alert("Login efetuado com sucesso!");
    } else {
      alert("E-mail ou senha incorretos. Tente novamente!");
    }
  }, [dispararValidacao]);
  
  const handleLogin = (event) => {
    event.preventDefault();

    if (!email || !senha) {
      alert("Por favor, preencha todos os campos obrigatórios! ⚠️");
      return;
    }

    setDispararValidacao((prev) => !prev);
  };

  return (
    <div className={styles["login-screen"]}>
      <div className={styles["discord-logo"]}>
        <img
          src={logoDC}
          alt="Discord Icon"
          className={styles["discord-logo-img"]}
        />
        <span>Discord</span>
      </div>

      <div className={styles["login-card"]}>
        <button className={styles["back-button"]}>‹ Voltar</button>

        <div className={styles["card-content"]}>
          <div className={styles["login-form-side"]}>
            <h2>Boas-vindas de volta!</h2>
            <p className={styles["subtitle"]}>
              Estamos muito animados em te ver novamente!
            </p>

            <form onSubmit={handleLogin}>
              <div className={styles["input-group"]}>
                <label>
                  E-mail ou número de telefone{" "}
                  <span className={styles["required"]}>*</span>
                </label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className={styles["input-group"]}>
                <label>
                  Senha <span className={styles["required"]}>*</span>
                </label>

                <input
                  type="password"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                />
              </div>

              <a href="#forgot" className={styles["forgot-password"]}>
                Esqueceu sua senha?
              </a>

              <button type="submit" className={styles["login-button"]}>
                Entrar
              </button>
            </form>

            <p className={styles["register-text"]}>
              Precisando de uma conta? <a href="#register">Registre-se</a>
            </p>
          </div>

        <div className={styles["qrcode-side"]}>
            <img src={QRcode} alt="Qr code" className={styles["qrcode-img"]} />
            <img
              src={DCQRlogo}
              alt="Qr code logo"
              className={styles["qrlogo-img"]}
            />

            <h3>Entrar com código QR</h3>
            <p>
              Escaneie isto com o <strong>app móvel do Discord</strong> para
              fazer login imediatamente.
            </p>

            <a href="#passkey" className={styles["passkey-link"]}>
              Ou, faça login com uma passkey
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
