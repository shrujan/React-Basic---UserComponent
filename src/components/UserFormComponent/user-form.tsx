import { useState } from 'react';
import styles from './user-form.module.scss';

const UserForm = () => {
  const [ userName, setUserName ] = useState('');
  const [ userAge, setUserAge ] = useState('');


  return (
    <section className={ styles['user-form'] }>
      <div>
        <label>User name</label>
        <input type="text" value={ userName }></input>
      </div>
      <div>
        <label>User Age</label>
        <input type="text" value={ userAge }></input>
      </div>
      <button>Add User</button>
    </section>
  )
}

export default UserForm;