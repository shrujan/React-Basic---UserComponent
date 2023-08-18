import { useSelector } from 'react-redux';
import styles from './Cart.module.scss';

export const CartItem = (props: any) => {
 
  return <section>
    { props.title }
  </section>
}
