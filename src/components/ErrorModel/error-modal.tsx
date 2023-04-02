import { Button } from '../UI/button';
import styles from './error-modal.module.scss';

export const ErrorModal = (props: any) => {

  const closeError = () => {
    props.showError({
      showError: false,
      errorMesssage: ''
    })
  }
  return (
    <section className={ styles['error-modal'] }>
      <div className={ styles['error-modal'] }></div>
      <div className={ styles['error-message']}>
        <div>
          Invalid Input
        </div>
        <section>
          { props.errorMessage }
        </section>
        {/* <button onClick={ closeError }>Okay</button> */}
        <Button onClick={ closeError }>Okay</Button>
      </div>
    </section>
  )
}
