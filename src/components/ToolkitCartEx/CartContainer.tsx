import { useSelector } from "react-redux";
import styles from './Cart.module.scss';
import { CartItem } from "./CartItem";

const CartContainer = () => {
   // cartItem is the parameter in store and the store is provided in parent component
   const { cartItems, amount, total } = useSelector((store: any) => store.cart)

   if (amount < 1) {
    return <section className={ styles['cart'] }>
        <header>
          <h2>
            Your Bag
          </h2>
          <h4 className={ styles['empty-cart'] }>Your bag is empty</h4>
        </header>
      </section>
   }
  
    return <section className={ styles['cart'] }>
      <header>
        <h2>Your Bag</h2>
      </header>
      <div>
        { cartItems.map((item: any) => {
            return <CartItem key={ item.id } title={ item.title }></CartItem>
          })
        }
      </div>
      <footer>
        <hr />
        <div className={ styles['cart-total'] }>
          <h4>
            Total <span>${ total }</span>
          </h4>
        </div>
        <button className={ styles['btn'] + ' ' +styles['btn-clear'] }>Clear Cart</button>
      </footer>
    </section>
}

export default CartContainer
