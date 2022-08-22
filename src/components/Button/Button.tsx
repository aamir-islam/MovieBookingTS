import React from 'react'
import { ButtonStyle } from '../Styles/Button.style'
interface props {
  onClick: React.MouseEventHandler<HTMLButtonElement>
  children: React.ReactNode

}

const Button = (props: props) => {
  return <ButtonStyle data-testid="closeFunc" onClick={props.onClick}>{props.children}</ButtonStyle>
}

export default Button