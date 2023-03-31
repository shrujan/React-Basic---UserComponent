import { useEffect } from "react";
import { UserCard } from "../UserCard/user-card.component";
import styles from './user-card-container.module.scss'

export const UserCardContainer = (props: any) => {

  return (
    <section className={ styles['user-card-container'] }>
      { 
        props.userList && props.userList.map((user: any) => (
          <UserCard userName={ user.userName } userAge={ user.userAge }></UserCard>
        ))
      }
    </section>
  )
}

