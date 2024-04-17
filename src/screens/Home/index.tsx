import React, { useCallback } from 'react'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import Header from '@components/Header'
import PercentageBox from '@components/PercentageBox'
import Button from '@components/Button'
import { SectionList, View } from 'react-native'
import * as C from "./styles"
import { getAllMeals } from '@storage/meals/getAllMeals'

const Home = () => {
  const [ListData, setListData] = React.useState([])

  const navigation = useNavigation();

  function navigateToStatistics (){
    navigation.navigate("statistics")
  }

 async function navigateToNewMeal (){
    navigation.navigate( "newMeal")
  }

  function navigateToMealData(){
    navigation.navigate("mealData")
  }

  async function fetchMeals() {
    try {
      const data = await getAllMeals()
      setListData(data)
    } catch (error) {
      console.log(error)
    }
  }

  useFocusEffect(useCallback(() => {
    fetchMeals()
  }, []))

  return (
    <C.Container>
      <Header />

      <View>
        <PercentageBox typeColor="GREEN" />
        <C.Button onPress={navigateToStatistics}>
          <C.Arrow />
        </C.Button>
      </View>

      <C.Texto>Refeições</C.Texto>
      <Button onPress={navigateToNewMeal} texto="Nova Refeição" typeIcon="PLUS" />

      <SectionList 
        style={{marginTop: 18}}
        sections={ListData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
    <C.MealContainer onPress={navigateToMealData}>
      <C.MealTime>{item.hour}</C.MealTime>
      <C.StickElement />
      <C.MealText>{item.meal}</C.MealText>
      <C.Status typeColor={item.status === 'GREEN_LIGHT' ? 'GREEN_LIGHT' : 'RED_LIGHT'} />
    </C.MealContainer>
  )}
  renderSectionHeader={({section: {title}}) => (
    <C.MealDate>{title}</C.MealDate>
  )}
/>
    </C.Container>
  )
}

export default Home
