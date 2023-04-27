import { MenuItem } from '../MenuItem/MenuItem'
import style from './MenuItemsContainer.module.scss';
import { DUMMY_MEALS as meals } from '../ConstData/DummyMeals';
import { useState } from 'react';

export const MenuItemsContainer = () => {
  const [mealsList, updateMealsList] = useState(meals)
 
  return (
    <section className={ style['menu-items-container'] }>
      {
        mealsList && mealsList.map(mealItem => <MenuItem item={ mealItem }></MenuItem>)
      }
      
    </section>
  )
}
