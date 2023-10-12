import { View, Text, TouchableOpacity,Image } from 'react-native'
import React from 'react'

export default function CateoryCard({imgUrl,title}) {
  return (
    <TouchableOpacity>
        <Image style={{width:80,height:80,borderRadius:5}}
        source={{uri:imgUrl,}}
        />
      <Text style={{position:'absolute',color:'white',marginTop:55,marginLeft:7}}>{title}</Text>
    </TouchableOpacity >  
  )
}