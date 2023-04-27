import { useEffect } from 'react'
import { Button } from '../Utils/Button'
import styles from './MenuItem.module.scss'

export const MenuItem = (props: any) => {
  useEffect(() => {
    console.log(props)
  })
  return (
    <div className={ styles['menu-item'] }>
      <div>
        <h3>{ props.item.name }</h3>
        <p>{ props.item.description }</p>
        <span>$44</span>
      </div>
      <div>
        <div>
          <label htmlFor='amount'>Amount</label>
          <input type='number' id='amount'></input>
        </div>
        <div>
          <Button text={ '+ Add' } classes={ 'filled' }/>
        </div>
      </div>
    </div>
  )
}
