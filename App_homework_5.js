import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, TouchableHighlight, Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { Ionicons } from '@expo/vector-icons';

import Dessert from './src/screen/Dessert';
import DessertScreen from './src/screen/DessertScreen';
import FoodDetailScreen from './src/screen/FoodDetailScreen'
import Food from './src/screen/Food'






const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyDessertStack() {
  return (
    <Stack.Navigator
      //進到畫面初始頁面
      initialRouteName='Dessert'
      screenOptions={{
        headerStyle: { backgroundColor: 'black' },
        headerBackTitle: '返回',
        headerTintColor: '#fff'
      }}

    >

      <Stack.Screen name="Dessert" component={Dessert} />
      <Stack.Screen name="DessertScreen" component={DessertScreen} />
    </Stack.Navigator>
  )

}

function MyFoodStack() {
  return (
    <Stack.Navigator
      //進到畫面初始頁面
      initialRouteName='Food'
      screenOptions={{
        headerStyle: { backgroundColor: 'black' },
        headerBackTitle: '返回2',
        headerTintColor: '#fff'
      }}
    >
      <Stack.Screen name="Food" component={Food} options={{ title: 'Food' }} />
      <Stack.Screen name="FoodDetailScreen" component={FoodDetailScreen} />


    </Stack.Navigator>
  )
}



export default function App() {



  return (
    // <View style={styles.container}>
    // </View >




    <NavigationContainer>

      {/* 上方導覽列換頁 */}

      {/* <Stack.Navigator
        //進到畫面初始頁面
        initialRouteName='HomeScreen'
        screenOptions={{
          headerStyle: { backgroundColor: 'black' },
          headerBackTitle: '返回',
          headerTintColor: '#fff'
        }}

      >

        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      </Stack.Navigator> */}


      {/* 下方導覽列換頁 */}

      <Tab.Navigator
        initialRouteName='Dessert'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, focused }) => {
            let iconName
            let iconImg
            if (route.name == 'Dessert') {
              //利用icon插件
              // iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline'

              //直接插入圖片
              iconImg = focused ? 'https://cdn0.iconfinder.com/data/icons/sweet-and-candies-3/64/Wedding_cake-cake-birthday-bakery-candles-512.png' : 'https://cdn0.iconfinder.com/data/icons/sweet-and-candies-3/64/Wedding_cake-cake-birthday-bakery-candles-512.png'
            } else if (route.name == 'Food') {
              // iconName = focused ? 'ios-options' : 'ios-list'
              iconImg = focused ? 'https://s3.us-east-2.amazonaws.com/upload-icon/uploads/icons/png/7365774771579770860-256.png' : 'https://s3.us-east-2.amazonaws.com/upload-icon/uploads/icons/png/7365774771579770860-256.png'
            }
            // return <Ionicons name={iconName} size={25} color={color}></Ionicons>
            return <Image style={{ width: 30, height: 30 }} source={{ uri: iconImg }}></Image>

          }
        })}
        tabBarOptions={{
          activeTintColor: 'green',
          inactiveTintColor: 'gray'
        }}>
        <Tab.Screen name="Dessert" component={MyDessertStack} />
        <Tab.Screen name="Food" component={MyFoodStack} />
      </Tab.Navigator >
    </NavigationContainer >

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
