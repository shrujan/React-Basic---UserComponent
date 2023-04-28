import { useContext, useEffect, useState } from 'react';
import styles from './Cart.module.scss';
import { CartIcon } from './CartIcon';
import { ItemsOrderedCtx } from '../Contexts/ItemsOrderedContext';

export const Cart = () => {
  const itemOrderedCtx                = useContext(ItemsOrderedCtx);
  const [ totalItems, setTotalItems ] = useState(0);


  useEffect(() => {
    const sum = itemOrderedCtx?.selectedItems.reduce((sum: number, item: any) => (item.quantity || 0) + sum , 0) || 0
    setTotalItems(sum)
  }, [itemOrderedCtx])


  return <section className={ styles['cart'] }>
    <CartIcon />
    <label>Your Cart</label>
    <span>{ totalItems }</span>
  </section>
}
