import { useState } from "react";
import { ItemsOrderedCtx } from "./Contexts/ItemsOrderedContext";
import { Header } from "./Header/Header";
import style from './Home.module.scss'
import { Intro } from "./Intro/Intro";
import { MenuItemsContainer } from "./MenuItemsContainer/MenuItemsContainer";

export const MenuHome = () => {

  const [ selectedMenuItems, setSelectedMenuItems ] = useState([])
  
  return <main className={ style['menu-main'] }>
    <ItemsOrderedCtx.Provider value={ selectedMenuItems }>
      <Header></Header>
      <section>
        <Intro></Intro>
        <MenuItemsContainer></MenuItemsContainer>
      </section>
    </ItemsOrderedCtx.Provider>
  </main>
}
