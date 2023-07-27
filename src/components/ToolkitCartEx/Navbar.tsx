
import { useSelector } from 'react-redux';
import styles from './Cart.module.scss';

const Navbar = () => {
  const { amount } = useSelector((store: any) => store.cart);
  console.log(amount)
  return <nav className={ styles['navbar-center'] }>
    <h3>Redux toolkit</h3>
    <div className={ styles['nav-container'] }>
      <div className={ styles['amount-container'] }>

      </div>
    </div>
  </nav>
}

export default Navbar
