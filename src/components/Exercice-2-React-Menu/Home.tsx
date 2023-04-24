import { Header } from "./Header/Header";
import style from './Home.module.scss'
import { Intro } from "./Intro/Intro";

export const MenuHome = () => {
  return <main className={ style['menu-main'] }>
    <Header></Header>
    <section>
      <Intro></Intro>
    </section>
  </main>
}
