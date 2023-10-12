import { View, Text ,StyleSheet, Image, TextInput, ScrollView} from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from 'react-native';
import { UserIcon,ChevronDownIcon,AdjustmentsVerticalIcon,MagnifyingGlassIcon } from "react-native-heroicons/outline";
import Category from '../components/Category';
import FeaturedRow from '../components/FeaturedRow';

const HomeScreen = () => {
    const navigation= useNavigation();
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:false,
        })
    }

    )
  return (
    <SafeAreaView style={styles.container}>
      
        <View style={{flexDirection:'row', width:"98%",marginTop:"1%"}}>
          <Image 
          style={{width:35,height:35,marginLeft:10,borderRadius:17.25,marginTop:"1.5%",padding:8}} source ={{uri:'https://deepcaves.world/images/studio1.jpg'}}/>
         <View style={{marginLeft:"2%",marginTop:"1%",flex:1}}>
            <Text style={{fontWeight:'500',color:'gray',fontSize:12}}>Deliver Now</Text>
            <Text style={{fontWeight:'500',fontSize:19}}>
              Current Location
             <ChevronDownIcon color='dodgerblue' size={22}/>  
            </Text>
         </View>
         <UserIcon color='dodgerblue' size={35}/>        
        </View>
        <View style={{flexDirection:'row',marginLeft:7,padding:3,marginTop:"3%",justifyContent:'center',alignItems:'center'}}>
          <View style={{flexDirection:'row',flex:1,backgroundColor:"#c5c6d0",height:43,borderRadius:2,alignItems:'center',gap:6,paddingLeft:13}}>
            <MagnifyingGlassIcon color='grey' size={20}/>
           <TextInput 
           placeholder="Restaurants and cuisine"/>
          </View>
          <AdjustmentsVerticalIcon color='dodgerblue'/>
        </View>
        
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{width:"100%"  }}>
           <Category/>
           <FeaturedRow  title="Offers near you!" description="buy from our paid partners" id="123"/>
           <FeaturedRow title="Featured" description="buy from our paid partners" id="123"/>
           <FeaturedRow title="Tasty Discounts" description="buy from our paid partners" id="123"/>
          </View>
        </ScrollView>
      
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      flex:1
    },
  });

export default HomeScreen