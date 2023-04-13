import styles from './button.module.scss'

export const Button = (props: any) => {
  return (
    <button onClick={ props.onClick } type={ props.type || 'button' } className={` ${ styles['button'] } `}>{ props.children }</button>
  )
}
