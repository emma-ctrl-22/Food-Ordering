import { View, Text, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/solid'
import {MapPinIcon} from 'react-native-heroicons/outline'

export default function RestaurantCards({
    title,imgUrl,id,rating,genre,address,
    short_description,dishes,long,lat
}) {
  return (
    <TouchableOpacity style={{width:230,borderRadius:8,margin:6,shadowColor:'#c5c6d0',shadowOffset:{width:6,height:6}}}>
      <View>
        <Image style={{height:120,width:"100%"}} source={{uri:imgUrl}}/>
      </View>
      <Text style={{fontWeight:'600',fontSize:17,marginLeft:6}}>{title}</Text>
      <View style={{flexDirection:'row',gap:10,alignItems:'center',marginLeft:6}}>
        <StarIcon color='dodgerblue' opacity={0.71}/>
        <Text><Text style={{color:'dodgerblue',marginRight:15}}>{rating}</Text> . {genre}</Text>
      </View>
      <View style={{flexDirection:'row',gap:10,alignItems:'center',marginLeft:6}}>
       <MapPinIcon color='gray'/>
       <Text style={{color:'gray'}}>Nearby . {address}</Text>
      </View>
    </TouchableOpacity>
  )
}