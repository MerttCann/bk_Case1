import * as React from 'react';
import { Dimensions, Text, View } from 'react-native';


function tab2Screen({route}){

return (

  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <View style={{backgroundColor:"white",width:Dimensions.get("window").width,height:60,position: "absolute",top:1,justifyContent:"center",alignItems:"center"}}>
    <Text>{route.params.data}</Text>
    </View>

  </View>
)}

export default tab2Screen
 