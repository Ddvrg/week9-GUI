import React from 'react'
import {View,Text,Image} from 'react-native'

export const tBanana=(props)=>{
  return(
    <View style={{alignItems:"center"}}>
      <Text>Type {props.name}</Text>
      <Text>111</Text>
    </View>
  )
}

const Banana=()=>{
  let pic={
    uri:'https://image.makewebeasy.net/makeweb/0/aNSsujWTa/FruitandVegs/Picture14.png',
  }
  return(
    <View style={{backgroundColor:"orange",alignItems:"center"}}>
      <Image
       style={{width:250,height:250,marginTop:20}} 
       source={pic} />
      <Text>Hello, I am a Banana</Text>
      <tBanana name='1. Cavendish Banana' ></tBanana>
    </View>
  )
}
export default Banana;