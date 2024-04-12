import React from 'react'
import * as C from "./styles"
import Logo from "@assets/Logo.svg"
import User from "@assets/User.svg"

const Header = () => {
  return <C.Container>
    <Logo />
    <User />
  </C.Container>
}

export default Header
