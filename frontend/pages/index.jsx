import React from "react"
import {useRouter} from "next/router"

export default function HomeScreen() {
  const [values,setValues] = React.useState({
    usuario:"omariosouto",
    senha:"safepassword",
  })
  const router = useRouter()

  function handleChange(event) {
    const fieldValue = event.target.value
    const fieldName = event.target.name

    setValues((currentValue)=>{
      return{
        ...currentValue,
        [fieldName]: fieldValue
      };
    })
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={(event)=>{
        event.preventDefault()

        router.push("/auth-page-ssr")
        //router.push("/auth-page-static")
      }}>
        <input
          placeholder="Usuário" name="usuario"
          value={values.usuario} onChange={handleChange}
        />
        <input
          placeholder="Senha" name="senha" type="password"
          value={values.senha} onChange={handleChange}
        />
        <div>
          <button>
            Entrar
          </button>
        </div>
      </form>
    </div>
  );
}
