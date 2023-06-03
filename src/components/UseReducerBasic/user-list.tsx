import { useState } from "react";
import styles from './user-list.module.scss'

const data = [
  { name: 'Shrujan', age: '32', id: 1 },
  { name: 'John',    age: '32', id: 2 },
  { name: 'Mike',    age: '32', id: 3 },
  { name: 'happry',  age: '32', id: 4 },
]

const UserListBasicReducerEx = () => {
  const [ userList, setUserList ] = useState(data);

  const deleteUser = (id: number) => {
    const filtered = userList.filter(user => user.id !== id);
    setUserList(filtered);
  }

  const clearAllUsers = () => {
    setUserList([])
  }

  const resetUsers = () => {
    setUserList(data)
  }

  return <section className={ styles['user-list'] }>
    { userList.map( user => (
      <div key={ user.id }>
        <label> { user.name } </label>
        <button onClick={() => deleteUser(user.id) }>Clear</button>
      </div>
      
    ) ) }
    <button onClick={ userList.length > 0 ? clearAllUsers : resetUsers }>{ userList.length > 0 ? 'Clear All' : 'Reset All' }</button>
  </section>
}

export default UserListBasicReducerEx;
