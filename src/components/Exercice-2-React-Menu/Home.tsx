import { Header } from "./Header/Header";
import style from './Home.module.scss'
import { Intro } from "./Intro/Intro";
import { MenuItemsContainer } from "./MenuItemsContainer/MenuItemsContainer";

export const MenuHome = () => {
  return <main className={ style['menu-main'] }>
    <Header></Header>
    <section>
      <Intro></Intro>
      <MenuItemsContainer></MenuItemsContainer>
    </section>
  </main>
}
