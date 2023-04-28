import { useContext } from 'react';
import styles from './CartDetailsModal.module.scss';
import { ItemsOrderedCtx } from '../Contexts/ItemsOrderedContext';
import { ShowCartDetailsContext } from '../Contexts/ShowCartDetailsContext';

export const CartDetailsModal = () => {
  const ItemsCtx = useContext(ItemsOrderedCtx);
  const modalCtx = useContext(ShowCartDetailsContext);
  return (
    <section className={ styles['cart-details'] }>
      <div onClick={ () => modalCtx?.setShowCartDetails(false) } className={ styles['backdrop'] }></div>
      <main className={ styles['selected-items'] }>
        {
          ItemsCtx?.selectedItems.map(item => {
            return (
              <div key={ item.id }>
                <div>
                  <h3>
                    { item.name }
                  </h3>
                  <div className={ styles['quantity'] }>
                    <span>${ item.price }</span>
                    <span>x { item.quantity }</span>
                  </div>
                </div>
              </div>
            )
          })
        }
      </main>
    </section>
  )
}
