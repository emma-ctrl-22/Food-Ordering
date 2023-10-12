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
        id={1}rating={4.5}genre="Ghanaian"address="34 oxford st"
        short_description="test description"dishes={{}}long={20}lat={5}
        title="Naa's Kitchen" imgUrl="https://deepcaves.world/images/studio1.jpg"/>
        
        <RestaurantCards 
        id={1}rating={4.5}genre="Ghanaian"address="34 oxford st"
        short_description="test description"dishes={{}}long={20}lat={5}
        title="Naa's Kitchen" imgUrl="https://deepcaves.world/images/studio1.jpg"/>

        <RestaurantCards 
        id={1}rating={4.5}genre="Ghanaian"address="34 oxford st"
        short_description="test description"dishes={{}}long={20}lat={5}
        title="Naa's Kitchen" imgUrl="https://deepcaves.world/images/studio1.jpg"/>

        <RestaurantCards 
        id={1}rating={4.5}genre="Ghanaian"address="34 oxford st"
        short_description="test description"dishes={{}}long={20}lat={5}
        title="Naa's Kitchen" imgUrl="https://deepcaves.world/images/studio1.jpg"/>
      </ScrollView>
    </View>
  ) 
};

export default FeaturedRow;