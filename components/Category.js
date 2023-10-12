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
      <CateoryCard title="testing" imgUrl="https://deepcaves.world/images/events-min.jpg"/>
      <CateoryCard title="testing" imgUrl="https://deepcaves.world/images/events-min.jpg"/>
      <CateoryCard title="testing" imgUrl="https://deepcaves.world/images/events-min.jpg"/>
      <CateoryCard title="testing" imgUrl="https://deepcaves.world/images/events-min.jpg"/>
      <CateoryCard title="testing" imgUrl="https://deepcaves.world/images/events-min.jpg"/>
      <CateoryCard title="testing" imgUrl="https://deepcaves.world/images/events-min.jpg"/>
      <CateoryCard title="testing" imgUrl="https://deepcaves.world/images/events-min.jpg"/> 
    </ScrollView>
  )
}