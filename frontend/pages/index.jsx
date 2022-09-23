import React from "react";
import { useRouter } from "next/router";
import { authService } from "../src/services/auth/authServices";

export default function HomeScreen() {
  const [values, setValues] = React.useState({
    usuario: "omariosouto",
    senha: "safepassword",
  });
  const router = useRouter();

  function handleChange(event) {
    const fieldValue = event.target.value;
    const fieldName = event.target.name;

    setValues((currentValue) => {
      return {
        ...currentValue,
        [fieldName]: fieldValue,
      };
    });
  }

  return (
    <div>
      <h1>Login</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          authService
            .login({
              username: values.usuario,
              password: values.password,
            })
            .then(() => {
              router.push("/auth-page-ssr");
              //router.push("/auth-page-static")
            }).catch(() => {
              alert("Usuario ou senha são invalidos");
            })
        }}
      >
        <input
          placeholder="Usuário"
          name="usuario"
          value={values.usuario}
          onChange={handleChange}
        />
        <input
          placeholder="Senha"
          name="senha"
          type="password"
          value={values.senha}
          onChange={handleChange}
        />
        <div>
          <button>Entrar</button>
        </div>
      </form>
    </div>
  );
}
