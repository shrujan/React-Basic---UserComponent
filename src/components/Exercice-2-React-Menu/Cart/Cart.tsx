import { useContext, useEffect, useState } from 'react';
import styles from './Cart.module.scss';
import { CartIcon } from './CartIcon';
import { ItemsOrderedCtx } from '../Contexts/ItemsOrderedContext';
import { ShowCartDetailsContext } from '../Contexts/ShowCartDetailsContext';

export const Cart = () => {
  const itemOrderedCtx                = useContext(ItemsOrderedCtx);
  const cartDetailsCtx                = useContext(ShowCartDetailsContext)
  const [ totalItems, setTotalItems ] = useState(0);

  useEffect(() => {
    const sum = itemOrderedCtx?.selectedItems.reduce((sum: number, item: any) => (item.quantity || 0) + sum , 0) || 0
    setTotalItems(sum)
  }, [itemOrderedCtx])

  const cartClickHandler = () => {
    if ( totalItems > 0 ) {
      cartDetailsCtx?.setShowCartDetails((state: boolean) => !state);
    }
  }

  return <section onClick={ cartClickHandler } className={ styles['cart'] }>
    <CartIcon />
    <label>Your Cart</label>
    <span>{ totalItems }</span>
  </section>
}
