import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, TouchableHighlight, Image } from 'react-native';
import MyButton from './src/components/button/MyButton.js'

export default function App() {


  const printMessage = () => {
    console.log('成功了 按到按鈕了')
  }

  return (
    <View style={styles.container}>
      {/* 上課練習開始 */}

      {/* <MyButton
        myTitle='Click'
        myOnPress={() => printMessage()}
        backgroundColor={'red'} color={'red'}

      ></MyButton> */}
      {/* 上課練習結束 */}

      {/* 作業開始 */}
      <MyButton
        myTitle='1'
        myOnPress={() => printMessage()}
        backgroundColor={'black'} color={'#fff'}

      ></MyButton>
      <MyButton
        myTitle='2'
        myOnPress={() => printMessage()}
        backgroundColor={'#0ac'} color={'#fff'}

      ></MyButton>
      <MyButton
        myTitle='3'
        myOnPress={() => printMessage()}
        backgroundColor={'pink'} color={'#fff'}

      ></MyButton>
      <MyButton
        myTitle='A'
        myOnPress={() => printMessage()}
        backgroundColor={'orange'} color={'#fff'}

      ></MyButton>
      <MyButton
        myTitle='B'
        myOnPress={() => printMessage()}
        backgroundColor={'green'} color={'#fff'}

      ></MyButton>
      <MyButton
        myTitle='C'
        myOnPress={() => printMessage()}
        backgroundColor={'brown'} color={'#fff'}

      ></MyButton>



      {/* 作業結束 */}

    </View >
    // <View style={styles.container}>

    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
