import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,Image, ListViewBase, Linking} from 'react-native';

import Img from '../../img/logo-ng.png';



const fun = () => {
  const [status, setStatus] = useState(false);

  return (
  
    <View>
        <View>
        <Image source={Img} style={styles.image} />
        </View>
        <View style={styles.head}>
            <Text style={styles.text} onPress={()=> Linking.openURL('https://albank.ru/ru/')}on> 
            Частным клиентам
            </Text>
            <Text style={styles.text2}onPress={()=> Linking.openURL('https://albank.ru/ru/corp/')}> 
            Бизнесу
            </Text>
            <Text style={styles.text2}onPress={()=> Linking.openURL('https://albank.ru/ru/invest/')}> 
            Инвесторам и акционерам
            </Text>
            <Text style={styles.text2}  > 
            Ещё
            </Text >    
            <Text >
            Отделения и банкоматы
            </Text>
            
        </View>
        
       
     
    </View>
    
    
  );
}

const styles = StyleSheet.create({
  head:{
      flex:1,
      flexDirection:"row",
      width: '100%',
      position: 'absolute',
      marginLeft:267,
      marginTop:60
    //  left:267,
    //  top: 60,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
      fontSize:14,
      color:'#2F88F0'
  },
  text2:{
    fontSize:14,
    color:'black',
    marginLeft:17
},
text3:{
  flex:1,
  flexDirection:'row',
  fontSize:14,
  color:'black',
  marginRight:24,
  marginTop:60
  
},
  image:{
      width: 130.38,
      height: 41,
      marginTop: 46,
      marginLeft: 100,
  }
});
export default fun;