import styles from './Button.module.scss';

export const Button = (props: any) => {
  return <button onClick={ props.clickHandler } className={ styles['button'] + " " + styles[props.classes] }>{ props.text }</button>
}