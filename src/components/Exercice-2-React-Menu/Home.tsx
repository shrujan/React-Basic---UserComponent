import { Header } from "./Header/Header";
import style from './Home.module.scss'

export const MenuHome = () => {
  return <main className={ style['menu-main'] }>
    <Header></Header>
  </main>
}
