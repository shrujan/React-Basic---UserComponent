import { useState, useReducer } from "react";
import styles from './user-list.module.scss'

const data = [
  { name: 'Shrujan', age: '32', id: 1 },
  { name: 'John',    age: '32', id: 2 },
  { name: 'Mike',    age: '32', id: 3 },
  { name: 'happry',  age: '32', id: 4 },
];

const CLEAR_ALL   = 'CLEAR_ALL';
const RESET_ALL   = 'RESET_ALL';
const DELETE_USER = 'DELETE_USER';

interface User {
  name: string,
  age: string,
  id: number
}

interface StateData {
  userList: User[]
}

const defaultState = {
  userList: data
}


const reducer = (state: StateData, action: any) => {

  switch (action.type) {
    case CLEAR_ALL:
      return {
        ...state,
        userList: []
      }
    case RESET_ALL:
      return {
        ...state,
        userList: data
      }
    case DELETE_USER:
      const userId = action.payload.id;
      const filtered = state.userList.filter(user => user.id !== userId);
      return {
        ...state,
        userList: filtered
      }
    default:
      return state
  }
  // return state;
};


const UserListBasicReducerEx = () => {

  // -------------- Normal state methods 

  // const [ userList, setUserList ] = useState(data);

  // const deleteUser = (id: number) => {
  //   const filtered = userList.filter(user => user.id !== id);
  //   setUserList(filtered);
  // }

  // const clearAllUsers = () => {
  //   setUserList([])
  // }

  // const resetUsers = () => {
  //   setUserList(data)
  // }

  // return <section className={ styles['user-list'] }>
  //   { userList.map( user => (
  //     <div key={ user.id }>
  //       <label> { user.name } </label>
  //       <button onClick={() => deleteUser(user.id) }>Delete</button>
  //     </div>
      
  //   ) ) }
  //   <button onClick={ userList.length > 0 ? clearAllUsers : resetUsers }>{ userList.length > 0 ? 'Clear All' : 'Reset All' }</button>
  // </section>

  // -----------------------------------

  // Reducer way
  
  const [ state, dispatch ] = useReducer(reducer, defaultState);

  const deleteUser = (id: number) => {
    dispatch({ type: DELETE_USER, payload: { id } })
  }

  const clearAllUsers = () => {
    dispatch({ type: CLEAR_ALL })
  }

  const resetUsers = () => {
    dispatch({ type: RESET_ALL })
  }

  return <section className={ styles['user-list'] }>
    { state.userList.map( (user: any) => (
      <div key={ user.id }>
        <label> { user.name } </label>
        <button onClick={() => deleteUser(user.id) }>Delete</button>
      </div>
      
    ) ) }
    <button onClick={ state.userList.length > 0 ? clearAllUsers : resetUsers }>{ state.userList.length > 0 ? 'Clear All' : 'Reset All' }</button>

  </section>
}

export default UserListBasicReducerEx;
