import { useState } from 'react';
import './App.scss';
import { UsersContainer } from './components/UsersContainer/users-container';
import { ErrorModal } from './components/ErrorModel/error-modal';

interface ErrorState {
  showError: boolean,
  errorMessage: string
}

function App() {
  const [ error, updateErrorState ] = useState<ErrorState>();

  const showError = (state: ErrorState) => {
   updateErrorState(state) 
  }

  return (
    <div className="App">
      {
        error?.showError ? <ErrorModal errorMessage={ error?.errorMessage } showError={ showError }></ErrorModal> : null
      }
      
      <UsersContainer showError={ showError }></UsersContainer>
    </div>
  );
}

export default App;
