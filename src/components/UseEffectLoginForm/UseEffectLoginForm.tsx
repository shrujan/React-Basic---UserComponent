import { useEffect, useState } from "react"

export const UseEffectLoginForm = () => {

  const [ userName, setUserName ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ isValidForm, setFormValididity ] = useState(false);

  useEffect(() => {
    // will get triggered and executed when username or password changes
    setFormValididity(
      (userName.trim().length > 0 && password.trim().length > 3)
    )
  }, [ userName, password ])

  return <section>
    <form>
      <input type="text" name="userName" onKeyUp={ (e: any) => { setUserName(e.target.value) }  }></input>
      <input type="password" name="password" onKeyUp={ (e: any) => { setPassword(e.target.value) } }></input>
      <button type="submit" disabled={ !isValidForm }>Login</button>
    </form>
  </section>
}
