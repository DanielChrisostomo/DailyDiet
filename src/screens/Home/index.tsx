import React from 'react'
import * as C from "./styles"
import Header from '@components/Header'
import PercentageBox from '@components/PercentageBox'
import Button from '@components/Button'

const Home = () => {

  function addNewMeal (){
    console.log("add New Meal pressed")
  }

  return (
    <C.Container>

      <Header />
      <PercentageBox />
      <C.Texto>Refeições</C.Texto>

      <Button onPress={addNewMeal} texto="Nova Refeição" typeIcon="PLUS"><>+</></Button>
    </C.Container>
  )
}

export default Home
