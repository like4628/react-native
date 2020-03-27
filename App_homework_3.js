import React, { useState } from 'react';

import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, TouchableHighlight, Image } from 'react-native';

export default function App() {

  //上課練習 開始

  const [validCode, setValidCode] = useState('')

  //上課練習 結束



  //作業練習 開始

  const [result, setResult] = useState()
  const [icon, setIcon] = useState()

  //方法一
  const getNumber = () => {
    console.log('按到按鈕了拉')
    if (validCode === '1234') {
      setResult(<Text style={[styles.reset, styles.text]}>輸入正確</Text>)
      setIcon(<Image style={{ width: 100, height: 100, }} source={{ uri: 'https://png.pngtree.com/svg/20170918/pass_1320237.png' }}></Image>)
    } else if (validCode.length < 4) {
      setResult(<Text style={[styles.up, styles.text]}>輸入錯誤，請重新輸入</Text>)
      setIcon(<Image style={{ width: 100, height: 100, }} source={{ uri: 'https://www.62icon.com/images/uploads/artwork/default/e3f7d91b86d4d69974b485306222bd83.png' }}></Image>)
    }
    else {
      setResult(<Text style={[styles.up, styles.text]}>輸入錯誤，請重新輸入</Text>)
      setIcon(<Image style={{ width: 100, height: 100, }} source={{ uri: 'https://lh3.googleusercontent.com/D4ut82ggvYIuUVLKP9kP3gUyDbvl7jlkLfrAKo1cUd-nRJ89YEwCnQ_cikLJfqOC3IU' }}></Image>)
    }
  }

  //作業練習結束








  return (
    <View style={styles.container}>
      {/* 上課練習開始 */}

      {/* <TextInput
        style={styles.input}
        onChangeText={(text) => setValidCode(text)}
        keyboardType='numeric'
        value={validCode}
        maxLength={4}></TextInput> */}

      {/* {validCode.length === 4 ? (validCode === '1234' ? <Text>輸入正確</Text> : <Text>輸入錯誤</Text>) : <Text>請輸入密碼</Text>} */}


      {/* 上課練習結束 */}




      {/* 作業開始 */}
      <Image style={{ width: 200, height: 200 }}
        source={{ uri: 'https://lh6.googleusercontent.com/SKwv7CpWm__XO_NE1_XdBwAMeVLbntpuYtVKxmxM8kv0GymWebSSTkE4i4Xm5EJX4MG8GUO5alyp4TbBc0BmwM5ISMGwXKM4k7inhOszlz6UA7S3b6qfthyYjAtHPGZx41OG_pP3=s800' }}
      ></Image>

      <Text style={[styles.text, { color: '#fff' }]}>請輸入密碼</Text>

      <TextInput
        style={styles.input}
        onChangeText={(text) => setValidCode(text)}
        keyboardType='numeric'
        value={validCode}
        maxLength={4}></TextInput>




      <TouchableOpacity
        style={styles.button}
        // 方法一 在14行
        // onPress={() => getNumber()}

        //方法二
        onPress={() => {
          validCode.length === 4 ? (validCode === '1234' ? [setResult(<Text style={[styles.reset, styles.text]}>輸入正確</Text>), setIcon(<Image style={{ width: 100, height: 100, }} source={{ uri: 'https://png.pngtree.com/svg/20170918/pass_1320237.png' }}></Image>)]
            : [setResult(<Text style={[styles.up, styles.text]}>輸入錯誤</Text>), setIcon(<Image style={{ width: 100, height: 100, }} source={{ uri: 'https://lh3.googleusercontent.com/D4ut82ggvYIuUVLKP9kP3gUyDbvl7jlkLfrAKo1cUd-nRJ89YEwCnQ_cikLJfqOC3IU' }}></Image>)])
            : [setResult(<Text style={[styles.down, styles.text]}>密碼不足4位數，請輸入密碼</Text>), setIcon(<Image style={{ width: 100, height: 100, }} source={{ uri: 'https://www.62icon.com/images/uploads/artwork/default/e3f7d91b86d4d69974b485306222bd83.png' }}></Image>)]
        }}
      >
        <Text style={{ color: '#00d6c8', textAlign: 'center', fontSize: 30, lineHeight: 40 }}>Enter</Text>
      </TouchableOpacity>

      {result}
      {icon}

      {/* 作業結束 */}

    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    width: 100,
    height: 40,
    borderRadius: 5,
    marginTop: 20,
    backgroundColor: '#333',
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    lineHeight: 40,
    marginTop: 20,
    marginBottom: 20
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 3,
    color: '#333',
    width: 200,
    height: 50,
    textAlign: "center",
    fontSize: 30
  },
  up: {
    // backgroundColor: "#f273bf",
    color: "#e60213",
  },
  down: {
    // backgroundColor: '#00aeef',
    color: "#00aeef"
  },
  reset: {
    // backgroundColor: '#00dc00',
    color: "#00dc00"
  },
});
