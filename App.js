import React, { useState } from 'react';

import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, TouchableHighlight, Image } from 'react-native';

export default function App() {

  //上課練習 開始
  const pressHighlight = () => {
    console.log('按到highlight按鈕囉～')
  }
  const pressOpacity = () => {
    console.log('按到opacity按鈕囉～')
  }
  //上課練習 結束

  //作業練習 開始

  const [count, setCount] = useState(0)

  //上數
  const countUp = () => {
    setCount(count + 1)
  }
  //下數
  const countDown = () => {
    setCount(count - 1)
  }
  //重設
  const reset = () => {
    setCount(0)
  }

  //作業練習結束


  return (
    <View style={styles.container}>
      {/* 上課練習開始 */}

      {/* <Text>底下是兩種按鈕</Text>
      <TouchableOpacity style={styles.button} onPress={() => { pressOpacity() }}>
        <Text style={styles.text}>按鈕反白</Text>
      </TouchableOpacity>

      <TouchableHighlight style={styles.button} onPress={() => { pressHighlight() }}>
        <Text style={styles.text}>按鈕反黑</Text>
      </TouchableHighlight>

      <TouchableOpacity style={styles.button} onPress={() => { pressOpacity() }}>
        <Image style={{ width: 20, height: 20 }}
          //本地匯入圖片方式
          //source={require('./src/pic/lock-1320568686583880933.png')}></Image>
          //網址匯入圖片方式 
          source={{ uri: 'https://icons-for-free.com/iconfiles/png/512/lock-1320568686583880933.png' }}></Image>
      </TouchableOpacity> */}

      {/* 上課練習結束 */}

      {/* 作業開始 */}
      <Text style={{ fontSize: 40 }}>目前數字是：{count}</Text>

      {/* 上數按鈕 */}
      <TouchableOpacity
        style={[styles.button, styles.up]}
        onPress={() => countUp()}>
        <Text style={styles.text}>Add</Text>
      </TouchableOpacity>

      {/* 下數按鈕 */}
      <TouchableOpacity
        style={[styles.button, styles.down]}
        onPress={() => countDown()}>
        <Text style={styles.text}>Substract</Text>
      </TouchableOpacity>

      {/* 重設按鈕 */}
      <TouchableOpacity
        style={[styles.button, styles.reset]}
        onPress={() => reset()}>
        <Text style={styles.text}>Reset</Text>
      </TouchableOpacity>

      {/* 作業結束 */}

    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // 上課練習 開始
  button: {
    width: 100,
    height: 40,
    borderRadius: 10,
    marginTop: 20
  },
  text: {
    textAlign: "center",
    color: '#fff',
    fontSize: 20,
    lineHeight: 40
  },
  // 上課練習 結束

  //作業練習開始
  up: {
    backgroundColor: "#f273bf"
  },
  down: {
    backgroundColor: '#00aeef',
  },
  reset: {
    backgroundColor: '#00dc00',
  }





  //作業練習結束





});
