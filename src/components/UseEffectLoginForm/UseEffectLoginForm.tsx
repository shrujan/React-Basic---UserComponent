import { useEffect, useState } from "react"

export const UseEffectLoginForm = () => {

  const [ userName, setUserName ] = useState('');
  const [ password, setPassword ] = useState('');

  useEffect(() => {
    const validateForm = () => {
      console.log(userName, password)
    }
  }, [ userName, password ])

  return <section>
    <form>
      <input type="text" name="userName" onKeyUp={ (e: any) => { setUserName(e.target.value) }  }></input>
      <input type="password" name="password" onKeyUp={ (e: any) => { setPassword(e.target.value) } }></input>
      <button type="submit">Login</button>
    </form>
  </section>
}
