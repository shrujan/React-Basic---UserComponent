import react, { useEffect, useState } from "react";
import styles from './user-card-container.module.scss'

export const UserCardContainer = (props: any) => {

  useEffect(() => {
    console.log(props)
  })

  return (
    <section className={ styles['user-card-container'] }>
      user container
      { props.userList && props.userList.map((user: any) => (
          <div> { user.userName }</div>
        ))
      }
    </section>
  )
}

