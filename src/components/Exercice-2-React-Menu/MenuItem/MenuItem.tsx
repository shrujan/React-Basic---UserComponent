import { useContext, useState } from 'react'
import { Button } from '../Utils/Button'
import styles from './MenuItem.module.scss'
import { ItemsOrderedCtx, OrderedItems } from '../Contexts/ItemsOrderedContext';

export const MenuItem = (props: any) => {
  const itemSelectedCtx         = useContext(ItemsOrderedCtx);
  const [quantity, setQuantity] = useState(0)

  const addItemHandler = () => {
    if (!itemSelectedCtx) return
    const itemList = itemSelectedCtx.selectedItems;
    if (!itemList.length) {
      itemList.push( { ...props.item, quantity: quantity } )
    } else {
      const itemIndex = itemList.findIndex((item: OrderedItems) => item.id === props.item.id);
      if (itemIndex < 0) {
        itemList.push({ ...props.item, quantity: quantity })
      } else {
        itemList[itemIndex] = { ...props.item, quantity: quantity }
      }
    }
    // itemSelectedCtx.selectedItems = itemList; // this wont work because context thinks its the same old array and unchanged
    itemSelectedCtx.setSelectedItems([ ... itemList ]) // so we created a new array and now context detects it.
    console.log(itemSelectedCtx)
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
          <input onChange={ e => setQuantity(Number(e.target.value)) } type='number' id='amount'></input>
        </div>
        <div>
          <Button clickHandler={ addItemHandler } text={ '+ Add' } classes={ 'filled' }/>
        </div>
      </div>
    </div>
  )
}
