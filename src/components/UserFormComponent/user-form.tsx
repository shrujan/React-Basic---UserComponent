import { useState } from 'react';
import styles from './user-form.module.scss';

const UserForm = () => {
  const [ userName, setUserName ] = useState('');
  const [ userAge, setUserAge ] = useState('');

  const saveForm = () => {
    console.log("save form")
  }

  return (
    <section className={ styles['user-form'] }>
      <div>
        <label>User name</label>
        <input type="text" value={ userName } onChange={ e => setUserName(e.target.value) }></input>
      </div>
      <div>
        <label>User Age</label>
        <input type="text" value={ userAge } onChange={ e => setUserAge(e.target.value) }></input>
      </div>
      <button onClick={ saveForm }>Add User</button>
    </section>
  )
}

export default UserForm;