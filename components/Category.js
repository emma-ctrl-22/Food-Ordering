import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CateoryCard from './CateoryCard'

export default function Category() {
  return (
    <ScrollView horizontal
    contentContainerStyle={{
        paddingHorizontal:5,
        gap:3
    }}
    showsHorizontalScrollIndicator={false} style={{padding:1,margin:3,width:"98%"}}>
      <CateoryCard onPress title="Snacks" imgUrl="https://deepcaves.world/images/events-min.jpg"/>
      <CateoryCard title="Groceries " imgUrl="https://deepcaves.world/images/events-min.jpg"/>
      <CateoryCard title="Local foods" imgUrl="https://deepcaves.world/images/events-min.jpg"/>
      <CateoryCard title="Fast Food" imgUrl="https://deepcaves.world/images/events-min.jpg"/>
      <CateoryCard title="Daavi's Special" imgUrl="https://deepcaves.world/images/events-min.jpg"/>
      <CateoryCard title="VVU CAFETERIA SPECIAL" imgUrl="https://deepcaves.world/images/events-min.jpg"/>
      <CateoryCard title="NORTEY PRINTING SERVICES" imgUrl="https://deepcaves.world/images/events-min.jpg"/> 
    </ScrollView>
  )
}