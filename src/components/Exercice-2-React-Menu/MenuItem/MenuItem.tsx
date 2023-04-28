import { useContext, useState } from 'react'
import { Button } from '../Utils/Button'
import styles from './MenuItem.module.scss'
import { ItemsOrderedCtx, OrderedItems } from '../Contexts/ItemsOrderedContext';

export const MenuItem = (props: any) => {
  const itemSelectedCtx         = useContext(ItemsOrderedCtx);
  const [quantity, setQuantity] = useState(1)

  const addItemHandler = () => {
    if (!itemSelectedCtx || quantity < 0) { return };
    const itemList = itemSelectedCtx.selectedItems;
    if (!itemList.length) {
      itemList.push( { ...props.item, quantity: quantity } ) // first item
    } else {
      const itemIndex = itemList.findIndex((item: OrderedItems) => item.id === props.item.id);
      if (itemIndex < 0) {
        itemList.push({ ...props.item, quantity: quantity }) // new item
      } else {
        itemList[itemIndex] = { ...props.item, quantity: quantity } // if item previously added .. update qty
      }
    }
    // itemSelectedCtx.selectedItems = itemList; // this wont work because context thinks its the same old array and unchanged
    itemSelectedCtx.setSelectedItems([ ... itemList ]) // so we created a new array and now context detects it.
  }

  const quantityChangeHandler = (e: any) => {
    const qty = Number(e.target.value);
    if (qty < 0) { setQuantity(0); return }
    setQuantity(qty)
  }

  return (
    <div className={ styles['menu-item'] }>
      <div>
        <h3>{ props.item.name }</h3>
        <p>{ props.item.description }</p>
        <span>${ props.item.price }</span>
      </div>
      <div>
        <div>
          <label htmlFor='amount'>Amount</label>
          <input onChange={ e => quantityChangeHandler(e) } min={ 0 } type='number' id='amount' value={quantity}></input>
        </div>
        <div>
          <Button clickHandler={ addItemHandler } text={ '+ Add' } classes={ 'filled' }/>
        </div>
      </div>
    </div>
  )
}
