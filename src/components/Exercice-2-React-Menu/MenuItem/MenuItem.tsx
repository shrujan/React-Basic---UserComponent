import { Button } from '../Utils/Button'
import styles from './MenuItem.module.scss'

export const MenuItem = () => {
  return (
    <div className={ styles['menu-item'] }>
      <div>
        <h3>Sushi</h3>
        <p>Fresh Fish and veggie</p>
        <span>$44</span>
      </div>
      <div>
        <div>
          <label htmlFor='amount'>Amount</label>
          <input type='number' id='amount'></input>
        </div>
        <div>
          <Button />
        </div>
      </div>
    </div>
  )
}
