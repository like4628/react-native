import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

const MyButton = props => (

    <TouchableOpacity onPress={props.myOnPress}
        style={{ backgroundColor: props.backgroundColor, width: 100, height: 100, borderRadius: 50, margin: 20 }}>
        {/* <Image style={{ width: 80, height: 80 }} source={{ uri: props.imageUri }} ></Image> */}
        <Text style={{ textAlign: 'center', lineHeight: 100, fontSize: 50, color: props.color }}>{props.myTitle}</Text>
    </TouchableOpacity >

)

export default MyButton