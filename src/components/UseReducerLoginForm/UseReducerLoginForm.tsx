import { useState } from "react"


export const UseReducerLoginForm = () => {
  // use Usereducer when we have a scenario where one state depends on another state 
  // in the below scenario userName and isUserNameValid are interlinked similarly for password and isPasswordValid

  const [ userName, setUserName ]           = useState('');
  const [ isUserNameValid, setIsValidUser ] = useState(false);

  const [ password, setPassword ]               = useState('');
  const [ isPasswordValid, setIsPasswordValid ] = useState(false);

  const [ isValidForm, setFormValididity ] = useState(false);

  const handleUserNameState = (event: any) => {
    setUserName(event.target.value);
    setIsValidUser((event.target.value).length > 0)
    checkFormValidity();
  }

  const handleUserPasswordState = (event: any) => {
    setPassword(event.target.value);
    setIsPasswordValid((event.target.value).length > 3);
    checkFormValidity();
  }

  const checkFormValidity = () => {
    console.log('usert' + userName,isUserNameValid, 'pass =' + password, isPasswordValid )
    setFormValididity(isPasswordValid && isUserNameValid)
  }

  
  return <section>
    <form>
      <input type="text" name="userName" onKeyUp={ (e: any) => { handleUserNameState(e) }  }></input>
      <input type="password" name="password" onKeyUp={ (e: any) => { handleUserPasswordState(e) } }></input>
      username = {userName + '==' + isUserNameValid} || password = {password + '==' + isPasswordValid}
      <button type="submit" disabled={ !isValidForm }>Login</button>
    </form>
  </section>
}
