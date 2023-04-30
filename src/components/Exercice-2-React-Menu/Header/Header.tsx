import { Cart } from '../Cart/Cart'
import styles from './Header.module.scss';
import mealsImg from '../Assets/meals.jpg'

export const Header = () => {
  return (
    <>
      <header className={ styles['header'] }>
        <h3>React Meals</h3>
        <Cart></Cart>
      </header>
      <div className={ styles['main-image'] }>
        <img src={ mealsImg } />
      </div>
    </>
    
  )
}
