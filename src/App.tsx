import React from 'react';
import logo from './logo.svg';
import './App.scss';
import UserForm from './components/UserFormComponent/user-form';
import { UserCardContainer } from './components/UserCardContainer/user-card-coontainer';
import { UsersContainer } from './components/UsersContainer/users-container';

function App() {
  return (
    <div className="App">
      <UsersContainer></UsersContainer>
    </div>
  );
}

export default App;
