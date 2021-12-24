import React from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    img,
    a
  } from 'react-native';
import MobileIcon from '../../img/MobileIcon.png';
import faceBook from '../../img/facebook (1).png';
import insta from '../../img/instagram (1).png';
import zlet from '../../img/100logo_mini1.png';

const styles = StyleSheet.create( {
    container:{
        height: 426,
        width: '100%',
        backgroundColor: '#27303E',
    },
    row:{
      marginLeft:100,
      marginTop:30,
      flexDirection: 'row',
      marginBottom:0
    },
    proztext:{
      color: '#FFFFFF',
      opacity: '60%',
      fontFamily: 'Arial',
      fontSize: 14
    },
    MobileIcon:{
      height:48,
      width:48,
      position:"absolute"
    },
    row2:{
      marginLeft:100,
      marginTop:10,
      flexDirection: 'row',
    },
    text:{
      color: '#FFFFFF',
      opacity: '100%',
      fontFamily: 'Arial',
      fontSize: 18
    },
    line:{
      marginTop:20,
      marginLeft:100,
      backgroundColor: '#FFFFFF',
      opacity:'60%',
      width:1190,
      height:1,

    },
    row3:{
      marginLeft:100,
      marginTop:20,
      flexDirection: 'row',
    },
    faceBook:{
      height:40,
      width:40,
      position:"absolute",
      marginLeft:1090, 
      marginTop:-10
    },
    insta:{
      height:40,
      width:40,
      position:"absolute",
      marginLeft:1150, 
      marginTop:-10
    },
    text2:{
      color: '#FFFFFF',
      opacity: '100%',
      fontFamily: 'Arial',
      fontSize: 12
    },
    zlet:{
      height:51,
      width:200,
      position:"absolute",
      marginLeft:1090, 
      marginTop:260
    },
});

const Footer = () => {
  return (
			<View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.proztext}>Бесплатная горячая линия</Text>
          <Text style={[styles.proztext, {marginLeft:35}]}>Телефон</Text>
          <Text style={[styles.proztext, {marginLeft:153}]}>Электронная почта</Text>
          <Text style={[styles.proztext, {marginLeft:79}]}>Наш адрес</Text>
          <Image style={[styles.MobileIcon, {marginLeft:930, marginTop:0}]} source={MobileIcon}/>
          <Text style={[styles.proztext, {marginLeft:294}]}>Приложение для iOS и Android</Text>
        </View>
        <View style={styles.row2}>
          <Text style={styles.text}>8 800 100-34-22</Text>
          <Text style={[styles.text, {marginLeft:75}]}>8 (4112) 34-22-22</Text>
          <a href={'mailto:bank@albank.ru'}><Text style={[styles.text, {marginLeft:70}]}>bank@albank.ru</Text></a>
          <Text style={[styles.text, {marginLeft:72}]}>г. Якутск, пр. Ленина, 1</Text>
          <a href={'https://app.albank.ru/'}><Text style={[styles.text, {marginLeft:175}]}>АЭБ Онлайн</Text></a>
        </View>
        <View style={styles.line}></View>
        <View style={styles.row3}>
          <a href={'https://albank.ru/ru/offices/'}><Text style={[styles.text]}>Офисы</Text></a>
          <a href={'https://albank.ru/ru/more/info/exchange/'}><Text style={[styles.text, {marginLeft:40}]}>Курсы валют</Text></a>
          <a href={'https://albank.ru/ru/more/info/news/'}><Text style={[styles.text, {marginLeft:40}]}>Новости</Text></a>
          <a href={'https://svoi.albank.ru//'}><Text style={[styles.text, {marginLeft:40}]}>Программа лояльности «Свои»</Text></a>
          <a href={'https://albank.ru/ru/more/sale/'}><Text style={[styles.text, {marginLeft:40}]}>Продажа имущества</Text></a>
          <a href={'https://albank.ru/'}><Text style={[styles.text, {marginLeft:225}]}>Связь с Банком</Text></a>
        </View>
        <View style={styles.line}></View>
        <View style={styles.row}>
          <Text style={styles.proztext}>© 2021 АКБ «Алмазэргиэнбанк» АО. Генеральная лицензия ЦБ РФ №2602 от 08.06.2015я</Text>
          <Image style={styles.faceBook} source={faceBook}/>
          <Image style={styles.insta} source={insta}/>
        </View>
        <View style={[{marginTop:28,marginLeft:100}]}></View>
        <Image style={styles.zlet} source={zlet}/>
        <a href="https://albank.ru/ru/interest-rates/"><Text style={[styles.text2, {marginTop:10,marginLeft:100}]}>Информация о процентных ставках по договорам банковского вклада с физическими лицами</Text></a>
        <a href="https://albank.ru/ru/disclosure/"><Text style={[styles.text2, {marginTop:10,marginLeft:100}]}>Раскрытие информации профессиональным участником рынка ценных бумаг</Text></a>
        <a href="https://disclosure.skrin.ru/disclosure/1435138944"><Text style={[styles.text2, {marginTop:10,marginLeft:100}]}>Раскрытие информации на сайте информационного агенства АО «СКРИН»</Text></a>
        <a href="https://albank.ru/local/templates/Aeb/assets/docs/RB2602_20210616.pdf"><Text style={[styles.text2, {marginTop:10,marginLeft:100}]}>Информация о лицах, под контролем либо значительным влиянием которых находится банк</Text></a>
        <View style={[styles.line,{marginTop:30}]}></View>
        <a href="https://albank.ru/ru/disclosure/"><Text style={[styles.proztext, {fontSize:12, marginLeft:100,marginTop:10}]}>Перейти на старый сайт</Text></a>
      </View>
  );
}

export default Footer;
