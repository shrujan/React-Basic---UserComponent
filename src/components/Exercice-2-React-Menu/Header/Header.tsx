import { Cart } from '../Cart/Cart'
import styles from './Header.module.scss'

export const Header = () => {
  return (
    <header className={ styles['header'] }>
      <h3>React Meals</h3>
      <Cart></Cart>
    </header>
  )
}
