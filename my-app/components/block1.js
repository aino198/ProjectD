import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';
import img1 from '../../img/dreamstime_xxl_29647630-01.jpg';
import Block8 from '../components/block8';
import {Link, BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const Block1 = () => {
    const [hovered, setHovered] = useState(false);

    const mouseEntered = () => {
        setHovered(true);
    };

    const mouseLeft = () => {
        setHovered(false);
    };

    const move = () => {
        window.scrollTo({
            top: 4200,
            behavior: 'smooth'
        });
    };

    return (
        <View style={styles.main}>
            <View style={styles.titleBlock}>
                <View style={styles.mainBlock}>
                    <Text style={styles.titleAEB}> АЭБ <Text style={styles.title}>- надежный и долгосрочный партнер для всех!</Text></Text>
                    <Text style={styles.text1}>
                        Откройте счет «Для бизнеса» со скидкой 25% при оплате авансом за 1 год любого пакета услуг.
                    </Text>
                            <TouchableOpacity 
                                style={hovered ? styles.button2 : styles.button1}
                                onMouseEnter={mouseEntered}
                                onMouseLeave={mouseLeft}
                                onPress={move}
                            >
                                <Text style={hovered ? styles.buttontext2 : styles.buttontext1}>Открыть счет</Text>
                            </TouchableOpacity>
                </View>
                <Image source={img1} style={styles.image1} />
            </View>
            <View style={styles.mainTable}>
                <View style={styles.column1}>
                    <Text style={styles.title2}>7 000</Text>
                    <Text style={styles.text2}>активных клиентов малого бизнеса</Text>
                </View>
                <View style={styles.column2}>
                    <Text style={styles.title2}>До 20 млн ₽</Text>
                    <Text style={styles.text2}>переводите себе на карту  на пакете «Для бизнеса».</Text>
                </View>
                <View style={styles.column3}>
                    <Text style={styles.title2}>25% скидка</Text>
                    <Text style={styles.text2}>при оплате авансом за 1 год любого пакета услуг.</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    main:{
        width: '100%',
        height: 744,
        backgroundColor: '#180C44',
        marginTop: 155
    },
    title:{
        fontSize: 40,
        fontFamily: 'Arial',
        color: '#fff',
        width: 643
    },
    titleAEB:{
        fontSize: 40,
        fontFamily: 'Arial',
        color: '#2F88F0',
        width: 643
    },
    titleBlock:{
        marginLeft: 100,
        flex:1,
        flexDirection: 'row'
    },
    text1:{
        fontSize: 21,
        fontFamily: 'Arial',
        color: '#fff',
        width:537,
        marginTop: 31,
        marginBottom:31
    },
    button1:{
        backgroundColor: '#2F88F0',
        width: 207,
        height:64,
        borderRadius: 7,
        justifyContent: 'center',
        alignItems:'center'
    },
    button2:{
        backgroundColor: '#fff',
        width: 207,
        height:64,
        borderRadius: 7,
        borderColor: '#2F88F0',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems:'center',
        shadowColor: '#fff',
        shadowOpacity: 0.5,
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowRadius: 20,
    },
    buttontext1:{
        fontSize: 18,
        fontFamily: 'Arial',
        color: '#fff'
    },
    buttontext2:{
        fontSize: 18,
        fontFamily: 'Arial',
        color: '#2F88F0'
    },
    image1:{
        width: 572,
        height: 362,
        marginTop: 80,
        marginLeft: 80
    },
    mainBlock:{
        marginTop: 140
    },
    mainTable:{
        flex:1,
        flexDirection: 'row',
        marginTop: 360,
        marginLeft: 100
    },
    text2:{
        width: 290,
        fontSize: 20,
        fontFamily: 'Arial',
        color: '#fff',
        marginTop: 10
    },
    title2:{
        fontSize: 32,
        fontFamily: 'Arial',
        color: '#2F88F0'
    },
    column2:{
        marginLeft: 185,
        marginRight: 185
    }
});

export default Block1;