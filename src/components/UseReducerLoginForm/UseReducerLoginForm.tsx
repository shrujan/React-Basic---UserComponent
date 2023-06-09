import { useReducer, useState } from "react";

const userNameReducer = (state: any, action: any) => {
  // this is outside the component function as it does not need any data from within the compoenent -
  // All the data needed will be passed as params
  if (action.type === 'USER_NAME') {
    return { value: action.value, isValid: action.value.length > 1 }
  }
  if (action.type === "USER_NAME_BLUR") {
    // state.value will always be the latest state
    return { value: state.value, isValid: state.value.length > 1 }
  }
  return { value: "", isValid: false }
}

const passwordReducer = (state: any, action: any) => {
  // this is outside the component function as it does not need any data from within the compoenent -
  // All the data needed will be passed as params
  if (action.type === 'PASSWORD') {
    return { value: action.value, isValid: action.value.length > 1 }
  }
  if (action.type === "PASSWORD_BLUR") {
    // state.value will always be the latest state
    return { value: state.value, isValid: state.value.length > 1 }
  }
  return { value: "", isValid: false }
}

// convert Basic Login form to use reducer to combine states
export const UseReducerLoginForm = () => {
  // use Usereducer when we have a scenario where one state depends on another state 
  // in the below scenario userName and isUserNameValid are interlinked similarly for password and isPasswordValid

  // const [ userName, setUserName ]           = useState('');
  // const [ isUserNameValid, setIsValidUser ] = useState(false);

  // reducer
  const [ userNameState, userNameDispatcher ] = useReducer(userNameReducer, {
    value: "",
    isValid: false
  })

  // const [ password, setPassword ]               = useState('');
  // const [ isPasswordValid, setIsPasswordValid ] = useState(false);

  const [ passwordState, passwordDispatcher ] = useReducer(passwordReducer, {
    value: '',
    isValid: false
  })

  const [ isValidForm, setFormValididity ] = useState(false);

  const handleUserNameState = (event: any) => {
    // setUserName(event.target.value);
    userNameDispatcher({
      type: "USER_NAME",
      value: event.target.value
    })

    // setIsValidUser((event.target.value).length > 0)
    setFormValididity(
      (event.target.value).length > 0 && passwordState.value.length > 3
    )
  }

  const handleUserPasswordState = (event: any) => {
    // setPassword(event.target.value);
    passwordDispatcher({
      type: "PASSWORD",
      value: event.target.value
    })
    // setIsPasswordValid((event.target.value).length > 3);
    setFormValididity(
      userNameState.value.length > 0 && (event.target.value).length > 3
    )
  }

  const validateUserNameHandler = () => {
    // setIsValidUser(userNameState.value.length > 1);
    userNameDispatcher({
      type: "USER_NAME_BLUR" 
    })
  };

  const validatePasswordHandler = () => {
    // setIsPasswordValid(password.trim().length > 3);
    passwordDispatcher({
      type: "PASSWORD_BLUR"
    })
  };

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
          value={ userNameState.value }
          onChange={ (e: any) => { handleUserNameState(e) } }
          onBlur={ validateUserNameHandler }
        ></input>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={ passwordState.value }
          onChange={ (e: any) => { handleUserPasswordState(e) } }
          onBlur={ validatePasswordHandler }
        ></input>
      </div>
      <button type="submit" disabled={ !isValidForm }>Login</button>
    </form>
  </section>
}
