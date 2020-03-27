import React, { useState } from 'react';

import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {

  //第一階段上課練習 開始
  const [food, setFood] = useState('candy')

  const [count, setCount] = useState(0)

  const changeFood = () => {
    setFood('rice')
  }
  const ChangeMeat = () => {
    setFood('meat')
  }

  const plus = () => {
    setCount(count + 1)
  }
  const substract = () => {
    setCount(count - 1)
  }
  //第一階段上課練習結束


  //作業練習開始
  const [validCode, setValidCode] = useState('')

  const correct = () => {
    if (validCode.length < 10) {
      return <Text style={styles.wrong}>輸入錯誤</Text>
    } else
      return <Text style={styles.correct}>輸入正確</Text>

  }
  //作業練習結束


  return (
    <View style={styles.container}>

      {/* 第一段練習開始 */}

      {/* <Text style={styles.title}>Hello~</Text>
      <Text style={styles.food}>{food}</Text>
      <Button
        title='Change Food'
        onPress={() => changeFood()}>

      </Button>
      <Button
        title='Change meat'
        onPress={() => ChangeMeat()}>
      </Button>

      <Text style={styles.number}>目前是:{count}</Text>
      <Button
        title='Press to add 1'
        color='#9900FF'
        onPress={() => plus()}>
      </Button>
      <Button
        title='press to substract 1'
        color='red'
        onPress={() => substract()}></Button> */}

      {/* 第一段練習結束 */}


      {/* 作業練習開始 */}

      <Text>電話號碼檢查</Text>
      <TextInput
        style={{ height: 30, width: 200, backgroundColor: '333', color: '333', borderWidth: 3, borderRadius: 5, textAlign: "center", marginTop: 20 }}
        onChangeText={(text) => setValidCode(text)}
        value={validCode}
        //指定鍵盤字數
        maxLength={10}
        //指定鍵盤型態
        keyboardType='phone-pad'
        // 鍵盤打完收回
        returnKeyType='done'
        //讓密碼不顯示
        // secureTextEntry={true}
        //進入畫面自動進入輸入畫面
        autoFocus={true}
      >
      </TextInput>
      <Text style={styles.userPhone}>輸入的電話號碼是： {validCode}</Text>

      <Text style={styles.message}>{correct()}</Text>

      {/* 作業練習結束 */}


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

  // 第一階段上課練習開始
  title: {
    color: '#fff',
    fontSize: 30,
  },
  food: {
    color: '#FF00FF',
    fontSize: 40
  },
  number: {
    color: '#FF8800',
    fontSize: 60
  },
  // 第一階段上課練習結束

  //作業練習開始
  userPhone: {
    fontSize: 20,
    marginTop: 20
  },
  message: {
    color: '#333',
    marginTop: 30,
    fontSize: 30
  },
  wrong: {
    color: '#f686a0'
  },
  correct: {
    color: '#00a100'
  }
  //作業練習結束

});
