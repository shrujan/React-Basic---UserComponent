import { UsersContainer } from '../components/UsersContainer/users-container';
import { ErrorModal } from '../components/ErrorModel/error-modal';
import { useState } from 'react';

interface ErrorState {
  showError: boolean,
  errorMessage: string
}

export const Exercise1 = () => {
  const [ error, updateErrorState ] = useState<ErrorState>();

  const showError = (state: ErrorState) => {
   updateErrorState(state) 
  }

  return (
    <>
      {
        error?.showError ? <ErrorModal errorMessage={ error?.errorMessage } showError={ showError }></ErrorModal> : null
      }
      <UsersContainer showError={ showError }></UsersContainer>
    </>
  )
}
