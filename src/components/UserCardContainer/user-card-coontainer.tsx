import styles from './user-card-container.module.scss'
import { UserCard } from "../UserCard/user-card.component";

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

