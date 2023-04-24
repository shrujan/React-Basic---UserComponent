import styles from './Cart.module.scss';
import { CartIcon } from './CartIcon';

export const Cart = () => {
  return <section className={ styles['cart'] }>
    <CartIcon />
    <label>Your Cart</label>
    <span>5</span>
  </section>
}
