import React from 'react'
import Header from '@components/Header'
import PercentageBox from '@components/PercentageBox'
import Button from '@components/Button'
import { SectionList } from 'react-native'
import * as C from "./styles"

type TypeListData = {
    title: string,
    data: string[],
}

const DATA: TypeListData[] = [
  {
    title: '12.08.22',
    data: ['Pizza', 'Burger', 'Risotto', 'Cheese Cake'],
  },
  {
    title: '11.08.22',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: '10.08.22',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: '9.08.22',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];

const Home = () => {
  const [ListData, setListData] = React.useState(DATA)

  function addNewMeal (){
    console.log("add New Meal pressed")
  }

  return (
    <C.Container>

      <Header />
      <PercentageBox typeColor="GREEN"/>
      <C.Texto>Refeições</C.Texto>

      <Button onPress={addNewMeal} texto="Nova Refeição" typeIcon="PLUS"><>+</></Button>

      <SectionList 
      style={{marginTop: 30}}
      sections={ListData}
      keyExtractor={(item, index) => item + index}
      renderItem={({item}) => (
          <C.MealContainer>
            <C.MealTime>20:00</C.MealTime>
            <C.StickElement />
            <C.MealText>{item}</C.MealText>
            <C.Status type="GREEN" />
          </C.MealContainer>
      )}
      renderSectionHeader={({section: {title}}) => (
        <C.MealDate style={{fontSize: 22}}>{title}</C.MealDate>
      )}
    />
    </C.Container>
  )
}

export default Home
