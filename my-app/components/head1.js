import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,Image, ListViewBase, Linking} from 'react-native';

import Img from '../../img/logo-ng.png';
import Img2 from '../../img/126474.png';
import Img3 from '../../img/вход.png';
import { TouchableOpacity } from 'react-native-web';



const fun = () => {
  const [hovered, setHovered] = useState(false);

    const mouseEntered = () => {
        setHovered(true);
    };

    const mouseLeft = () => {
        setHovered(false);
    };

  return (
  
    <View style={styles.main}>
        <View style={[100]}>
        <TouchableOpacity onPress={()=> Linking.openURL('https://albank.ru/ru/') }> 
        <Image source={Img} style={styles.image}/>
        </TouchableOpacity>
        </View>
        <View style={styles.head}>
            <Text style={styles.text} onPress={()=> Linking.openURL('https://albank.ru/ru/')}> 
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
            <Text style={[styles.text2, {marginLeft: 435}]} onPress={()=> Linking.openURL('https://albank.ru/ru/offices/')} >
              Отделения и банкоматы
            </Text>
            <Image source={Img2} style={[{marginLeft:17,width:14,height:15}]} />
          </View>

          <View style={styles.block3}>
          <Text style={[styles.text3, {marginLeft:41}]} >
              Кредиты
            </Text>
            <Text style={[styles.text3, {marginLeft:41}]} >
              Ипотека
            </Text>
            <Text style={[styles.text3, {marginLeft:41}]} >
              Вклады
            </Text>
            <Text style={[styles.text3, {marginLeft:41}]} >
              Карты
            </Text>
            <TouchableOpacity onPress={()=> Linking.openURL('https://albank.ru/ru/offices/')} >
            <Image source={Img3} style={[{marginLeft:782,width:30,height:30,marginTop:-2}] } />
            </TouchableOpacity>
            <Text style={[styles.text,{marginLeft:4}]} onPress={()=> Linking.openURL('https://albank.ru/ru/offices/')} > 
            АЭБ Онлайн
            </Text>
          </View>
              
    </View>
    
    
  );
}

const styles = StyleSheet.create({
  main:{
    width:'100%',
    height:155,
  },
  head:{
    flex:1,
    flexDirection:"row",
    position: 'absolute',
    marginLeft:267,
    marginTop:60
  },
  text:{
      fontSize:14,
      color:'#2F88F0',
      fontWeight:500,
  },
  text2:{
    fontSize:14,
    color:'black',
    marginLeft:17,
    fontWeight:400,
},
text3:{
  fontSize:14,
  color:'black',
  fontWeight:500,
},
  image:{
      width: 130.38,
      height: 41,
      marginTop: 46,
      marginLeft: 100,
  },
  block2:{
    flex:1,
    position:'absolute',
    left:435,
    marginTop:60,
    flexDirection:'row',

  },
  block3:{
    flexDirection:'row',
    marginTop:25,
    marginLeft:100,
  }
});
export default fun;