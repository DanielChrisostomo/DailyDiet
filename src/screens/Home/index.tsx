import React from 'react'
import * as C from "./styles"
import Header from '@components/Header'
import PercentageBox from '@components/PercentageBox'
import Button from '@components/Button'

const Home = () => {
  return (
    <C.Container>

      <Header />
      <PercentageBox />
      <C.Texto>Refeições</C.Texto>

      <Button texto="Nova Refeição"><>+</></Button>
    </C.Container>
  )
}

export default Home
