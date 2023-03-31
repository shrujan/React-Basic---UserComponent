import styles from './user-card.module.scss'

export const UserCard = (props: { userName: string, userAge: number}) => {
  return (
    <div className={ styles['user-card'] }>
      { props.userName } ({ props.userAge } years old)
    </div>
  )
}