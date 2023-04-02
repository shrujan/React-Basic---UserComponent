import { useState } from 'react';
import { Button } from '../UI/button';
import styles from './user-form.module.scss';

const UserForm = (props: any) => {
  const [ userName, setUserName ] = useState('');
  const [ userAge, setUserAge ] = useState('');

  const saveForm = (event: any) => {
    props.updateUser({
      userName,
      userAge
    })
    setUserName('');
    setUserAge('');
    event.preventDefault()
  }

  return (
    <section className={ styles['user-form'] }>
      <form onSubmit={ saveForm }>
        <div>
          <label htmlFor='userName'>User name</label>
          <input id='userName' type="text" value={ userName } onChange={ e => setUserName(e.target.value) }></input>
        </div>
        <div>
          <label htmlFor='userAge'>User Age</label>
          <input id='userAge' type="number" value={ userAge } onChange={ e => setUserAge(e.target.value) }></input>
        </div>
        {/* <button type='submit'>Add User</button> */}
        <Button type={ 'submit' }>Add User</Button>
      </form>
      
    </section>
  )
}

export default UserForm;