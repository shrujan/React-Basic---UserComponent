import { useState } from "react"


export const BasicLoginForm = () => {
  // use Usereducer when we have a scenario where one state depends on another state 
  // in the below scenario userName and isUserNameValid are interlinked similarly for password and isPasswordValid

  const [ userName, setUserName ]           = useState('');
  const [ isUserNameValid, setIsValidUser ] = useState(false);

  const [ password, setPassword ]               = useState('');
  const [ isPasswordValid, setIsPasswordValid ] = useState(false);

  const [ isValidForm, setFormValididity ] = useState(false);

  const handleUserNameState = (event: any) => {
    setUserName(event.target.value);
    // setIsValidUser((event.target.value).length > 0)
    setFormValididity(
      (event.target.value).length > 0 && password.length > 3
    )
  }

  const handleUserPasswordState = (event: any) => {
    setPassword(event.target.value);
    // setIsPasswordValid((event.target.value).length > 3);
    setFormValididity(
      userName.length > 0 && (event.target.value).length > 3
    )
  }

  const validateUserNameHandler = () => {
    setIsValidUser(userName.length > 1);
  };

  const validatePasswordHandler = () => {
    setIsPasswordValid(password.trim().length > 3);
  };

  // const checkFormValidity = () => {
  //   console.log('usert' + userName,isUserNameValid, 'pass =' + password, isPasswordValid )
  //   setFormValididity(isPasswordValid && isUserNameValid)
  // }

  const submitLoginHandler = (event: any) => {
    console.log('Login user');
    event.preventDefault();
  }
  
  return <section>
    <form onSubmit={ submitLoginHandler }>
      <div>
        <label htmlFor="userName">E-Mail</label>
        <input
          id="userName"
          type="text"
          value={ userName }
          onChange={ (e: any) => { handleUserNameState(e) } }
          onBlur={ validateUserNameHandler }
        ></input>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={ password }
          onChange={ (e: any) => { handleUserPasswordState(e) } }
          onBlur={ validatePasswordHandler }
        ></input>
      </div>
      username = {userName + '==' + isUserNameValid} || password = {password + '==' + isPasswordValid}
       =---isValidForm = {isValidForm + '*'}
      <button type="submit" disabled={ !isValidForm }>Login</button>
    </form>
  </section>
}
