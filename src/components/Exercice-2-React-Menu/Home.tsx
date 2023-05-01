import { useState } from "react";
import { ItemsOrderedCtx } from "./Contexts/ItemsOrderedContext";
import { Header } from "./Header/Header";
import style from './Home.module.scss'
import { Intro } from "./Intro/Intro";
import { MenuItemsContainer } from "./MenuItemsContainer/MenuItemsContainer";
import { ShowCartDetailsContext } from "./Contexts/ShowCartDetailsContext";
import { CartDetailsModal } from "./CartDetailsModal/CartDetailsModal";
import { createPortal } from "react-dom";

export const MenuHome = () => {
  const [ selectedItems, setSelectedItems ] = useState([]);
  const [ showCartDetails, setShowCartDetails] = useState(false);

  const modalPlaceholder = document.getElementById('modal-placeholder')!;

  return <main className={ style['menu-main'] }>
    <ItemsOrderedCtx.Provider value={ {
        selectedItems:    selectedItems,
        setSelectedItems: setSelectedItems
      }}>
      <ShowCartDetailsContext.Provider value={{
        showCartDetails: showCartDetails,
        setShowCartDetails: setShowCartDetails
      }}>
        { showCartDetails && createPortal(<CartDetailsModal></CartDetailsModal>, modalPlaceholder) }
        <Header></Header>
      </ShowCartDetailsContext.Provider>
      <section className={ style['menu-items'] }>
        <Intro></Intro>
        <MenuItemsContainer></MenuItemsContainer>
      </section>
    </ItemsOrderedCtx.Provider>
  </main>
}
