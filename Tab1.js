import  React, {useState} from 'react';
import { Dimensions, Text, View } from 'react-native';
import { TextInput,StyleSheet,Button } from 'react-native';



function tab1Screen({navigation}){
  
const [text, onChangeText] = React.useState(null);  
  
return(
   
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
   <View style={{backgroundColor:"white",width:Dimensions.get("window").width,height:60,position: "absolute",top:1,justifyContent:"center",alignItems:"center"}}>
   <Text>BAŞLIK</Text>
    </View>

 <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
     
   <Button 
        title="Button"
        onPress={() => navigation.navigate('tab2',{data:text})}
      />

 </View>
      )
}

const styles = StyleSheet.create({
  input: {
    height: 60,
    width:150,
    margin: 19,
    borderWidth: 1,
    padding: 15,
  },
});

export default tab1Screen