import React, { useState } from 'react';

import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {


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

  const [validCode, setValidCode] = useState('')

  const correct = () => {
    if (validCode.length < 10) {
      return <Text>輸入錯誤</Text>
    } else
      return <Text>輸入正確</Text>

  }

  const wrong = () => {

  }


  return (
    <View style={styles.container}>

      {/* 第一段練習 */}

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


      {/* TextInput練習 */}

      <Text>電話號碼檢查</Text>
      <TextInput
        style={{ height: 30, width: 200, backgroundColor: '333', color: '333', borderWidth: 3, borderRadius: 5, textAlign: "center", marginTop: 20 }}
        onChangeText={(text) => setValidCode(text)}
        value={validCode}
        maxLength={10}
        keyboardType='number-pad'
        secureTextEntry={true}
        autoFocus={true}
      >
      </TextInput>
      <Text style={styles.userPhone}>輸入的電話號碼是： {validCode}</Text>

      <Text style={styles.message}>{correct()}</Text>










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

  // 第一階段上課練習
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

  //課後作業
  userPhone: {
    fontSize: 20,
    marginTop: 20
  },
  message: {
    color: '#333',
    marginTop: 30,
    fontSize: 30
  }

});
