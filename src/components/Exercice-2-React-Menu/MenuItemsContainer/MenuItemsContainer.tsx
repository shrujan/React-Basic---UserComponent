import { MenuItem } from '../MenuItem/MenuItem'
import style from './MenuItemsContainer.module.scss'

export const MenuItemsContainer = () => {
  return (
    <section className={ style['menu-items-container'] }>
      <MenuItem></MenuItem>
    </section>
  )
}
