import { useContext, useEffect, useState } from 'react';
import styles from './CartDetailsModal.module.scss';
import { ItemsOrderedCtx, OrderedItems } from '../Contexts/ItemsOrderedContext';
import { ShowCartDetailsContext } from '../Contexts/ShowCartDetailsContext';
import { Button } from '../Utils/Button';

export const CartDetailsModal = () => {
  const ItemsCtx = useContext(ItemsOrderedCtx);
  const modalCtx = useContext(ShowCartDetailsContext);

  const [total, setTotal] = useState(0)

  useEffect(() => {
    calculateTotal();
  }, [ItemsCtx]);

  const calculateTotal = () => {
    const calcTotal = () => ItemsCtx?.selectedItems.reduce((sum, item) => sum + (item.price  * item.quantity), 0) || 0;
    setTotal(() => calcTotal())
  }

  const handleQuantityIncrease = ( item: OrderedItems ) => {
    if (!ItemsCtx) return;
    const newItemCtx = [ ...ItemsCtx.selectedItems ];
    const index      = newItemCtx.findIndex(menuItem => menuItem.id === item.id);
    const newQty     = item.quantity + 1;
    
    if (index >= 0) {
      newItemCtx[index].quantity = newQty;
    }
    ItemsCtx.setSelectedItems(newItemCtx)
  }

  const handleQuantityDecrease = ( item: OrderedItems ) => {
    if (!ItemsCtx) return;
    const newItemCtx = [ ...ItemsCtx.selectedItems ];
    const index      = newItemCtx.findIndex(menuItem => menuItem.id === item.id);
    const newQty     = item.quantity - 1;

    if (index >= 0) {
      const updateQty = () => newItemCtx[index].quantity = newQty;
      const deleteItem = () => {
        newItemCtx.splice(index, 1);
        if (!newItemCtx.length) {
          modalCtx?.setShowCartDetails(false)
        }
      }
      newQty > 0 ? updateQty() : deleteItem();
    }
    ItemsCtx.setSelectedItems(newItemCtx)
  }

  const orderItems = () => {
    console.log('Ordering....')
  }

  return (
    <section className={ styles['cart-details'] }>
      <div onClick={ () => modalCtx?.setShowCartDetails(false) } className={ styles['backdrop'] }></div>
      <main className={ styles['selected-items'] }>
        {
          ItemsCtx?.selectedItems.map(item => {
            return (
              <section key={ item.id }>
                <div>
                  <h3>
                    { item.name }
                  </h3>
                  <div className={ styles['quantity'] }>
                    <span>${ item.price }</span>
                    <span>x { item.quantity }</span>
                  </div>
                </div>
                <div className={ styles['button-container'] }>
                  <Button clickHandler={ () => handleQuantityIncrease(item) } classes={ 'outline' } text={ '+' }></Button>
                  <Button clickHandler={ () => handleQuantityDecrease(item) } classes={ 'outline' } text={ '-' }></Button>
                </div>
              </section>
            )
          })
        }
        <footer>
          <div>
            <label>Total Amount</label>
            <span>${ total.toFixed(2) }</span>
          </div>
          <div>
            <Button clickHandler={ () => modalCtx?.setShowCartDetails(false) } classes={ "outline" } text={ "close" }></Button>
            <Button clickHandler={ orderItems } classes={ "filled" } text={ "Order" }></Button>
          </div>
        </footer>
      </main>
    </section>
  )
}
