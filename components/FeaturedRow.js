import { View, Text, ScrollView, } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import RestaurantCards from './RestaurantCards';

const FeaturedRow = ({title,description,id}) => {
  return (
    <View style={{marginTop:10}}>
      <View style={{flexDirection:'row',justifyContent:'space-between',margin:0}}>
      <Text style={{fontWeight:'500',fontSize:16,marginLeft:7}}>{title}</Text>
      <ArrowRightIcon/>
      </View>  
      <Text style={{marginLeft:10,color:"#c5c6d0",marginTop:0}}>{description}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}
       contentContainerStyle={{
        paddingHorizontal:15
       }}
       style={{}} >
        <RestaurantCards 
        id={1}rating={4.5}genre="Groceries "address="Bediako"
        short_description="test description"dishes={{}}long={20}lat={5}
        title="Bediako Shop" imgUrl="https://deepcaves.world/images/studio1.jpg"/>
        
        <RestaurantCards 
        id={1}rating={4.5}genre="Groceries "address=" JJ NORTEY"
        short_description="Buy your regular groceries here"dishes={{}}long={20}lat={5}
        title="JJ NORTEY SHOP" imgUrl="https://deepcaves.world/images/studio1.jpg"/>

        <RestaurantCards 
        id={1}rating={4.5}genre="Food"address="Seth Laryea Hall"
        short_description="buy both vegetarian and non vegetarian dishes here"dishes={{}}long={20}lat={5}
        title="VVU CAFETERÍA " imgUrl="https://deepcaves.world/images/studio1.jpg"/>

        <RestaurantCards 
        id={1}rating={4.5}genre="Groceries "address="VICTORY"
        short_description="BUY EVERY PROVISION YOU NEED HERE"dishes={{}}long={20}lat={5}
        title="VICTORY STORE" imgUrl="https://deepcaves.world/images/studio1.jpg"/>
      </ScrollView>
    </View>
  ) 
};

export default FeaturedRow;