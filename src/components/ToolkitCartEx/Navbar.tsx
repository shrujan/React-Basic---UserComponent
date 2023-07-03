
import { useSelector } from 'react-redux'
import styles from './Cart.module.scss'

const Navbar = () => {
  const { amount } = useSelector((state: any) => state.cart);
  
  return <nav className={ styles['navbar-center'] }>
    <h3>Redux toolkit</h3>
  </nav>
}

export default Navbar
