import { useEffect, useState } from "react"

export const UseEffectLoginForm = () => {

  const [ userName, setUserName ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ isValidForm, setFormValididity ] = useState(false);

  useEffect(() => {
    // will get triggered and executed when username or password changes
    const timeoutIdentifier = setTimeout(() => {
      console.log('Check valididty')
      setFormValididity(
        (userName.trim().length > 0 && password.trim().length > 3)
      )
    }, 500)
    
    // this return function will not run the first time the useEffect runs - ie when the page first loads.
    return () => {
      console.log('Cleanup')
      // this will run from the second time the useEffect is run
      clearTimeout(timeoutIdentifier)
    }
  }, [ userName, password ])

  return <section>
    <form>
      <input type="text" name="userName" onKeyUp={ (e: any) => { setUserName(e.target.value) }  }></input>
      <input type="password" name="password" onKeyUp={ (e: any) => { setPassword(e.target.value) } }></input>
      <button type="submit" disabled={ !isValidForm }>Login</button>
    </form>
  </section>
}
