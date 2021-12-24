import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, CheckBox, Linking } from 'react-native';
import captch from '../../img/captcha.png';
import upd from '../../img/cycle+interface+update+icon-1320184070507016548.png';
import whatsapp from '../../img/Whatsapp-logo-icon-transparent.png';

const Block8 = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState(null);
    const [symbols, setSymbols] = useState(null);
    const [checked, setChecked] = useState(false);
    const [hovered, setHovered] = useState(false);

    const sendForm = () => {
        if (checked) {
            //do smthng
        }
    };

    const mouseEntered = () => {
        setHovered(true);
    };

    const mouseLeft = () => {
        setHovered(false);
    }

    return (
        <View style={styles.main}>
            <Text style={styles.title1}>Стать клиентом</Text>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder="Имя"
            />
            <TextInput
                style={styles.input}
                value={phone}
                onChangeText={setPhone}
                placeholder="Телефон"
                keyboardType="numeric"
            />
            <View style={styles.row}>
                <Image source={captch} style={styles.image} />
                <TouchableOpacity>
                    <Image source={upd} style={styles.upd} />
                </TouchableOpacity>
                <TextInput
                    style={styles.inputCaptcha}
                    value={symbols}
                    onChangeText={setSymbols}
                    placeholder="Введите символы с картинки"
                    keyboardType="numeric"
                />
            </View>
            <View style={styles.view1}>
                <CheckBox value={checked} style={styles.checkBox} onValueChange={setChecked} />
                <Text style={styles.text1}>Даю согласие АКБ «Алмазэргиэнбанк» АО на <TouchableOpacity 
                onPress={() => Linking.openURL('https://albank.ru/local/templates/Aeb/assets/docs/%D0%A1%D0%BE%D0%B3%D0%BB%D0%B0%D1%81%D0%B8%D0%B5%20%D0%BD%D0%B0%20%D0%BE%D0%B1%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D1%83%20%D0%9F%D0%94.pdf')}>
                <Text style={styles.link}>обработку персональных данных</Text></TouchableOpacity></Text>
            </View>
            <TouchableOpacity
                style={hovered ? styles.button2 : styles.button1}
                onMouseEnter={mouseEntered}
                onMouseLeave={mouseLeft}
            >
                <Text style={hovered ? styles.text3 : styles.text2}>Отправить</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    Linking.openURL(' https://wa.me/+79142803747?text=Я%20хочу%20получить%20консультацию%20по%20whatsapp')
                }}>
                <Image source={whatsapp} style={styles.whatsappLogo} />
            </TouchableOpacity>
        </View>
    );
};

const styles=StyleSheet.create({
    main: {
        width: '100%',
        height: 814,
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    title1: {
        fontSize: 30,
        fontFamily: 'sans-serif',
        color: '#000',
        fontWeight: 'bold'
    },
    input: {
        height: 55,
        width: 724,
        marginTop: 63,
        borderWidth: 1,
        padding: 10,
        borderColor: '#6D6D6D',
        borderRadius: 7
    },
    row: {
        flexDirection: 'row',
        marginTop: 55,
        marginBottom: 0,
        height: 65
    },
    image: {
        width: 180,
        height: 40,
        marginTop: 10
    },
    upd: {
        width: 60,
        height: 60, 
        marginLeft: 35,
        marginRight: 60
    },
    inputCaptcha: {
        height: 55,
        width: 371,
        borderWidth: 1,
        padding: 10,
        borderColor: '#6D6D6D',
        borderRadius: 7,
        alignItems: 'center',
        textAlign: 'center'
    },
    view1: {
        flexDirection: 'row',
        marginTop: 63
    },
    checkBox: {
        fontSize: 28,
        marginRight: 16,
        width: 28,
        height: 28,
        marginTop: -3,
        color: '#2F88F0'
    },
    text1: {
        fontSize: 20,
        fontFamily: 'Roboto',
        color: '#000'
    },
    link: {
        fontSize: 20,
        fontFamily: 'Roboto',
        color: '#2F88F0'
    },
    button1: {
        width: 206,
        height: 64,
        backgroundColor: '#2F88F0',
        borderRadius: 7,
        alignItems: 'center',
        textAlign: 'center',
        marginTop: 63,
        justifyContent: 'center'
    },
    button2: {
        width: 206,
        height: 64,
        backgroundColor: '#fff',
        borderRadius: 7,
        borderColor: '#2F88F0',
        borderWidth: 1,
        alignItems: 'center',
        textAlign: 'center',
        marginTop: 63,
        justifyContent: 'center'
    },
    text2: {
        fontSize: 22,
        fontFamily: 'Roboto',
        color: '#fff'
    },
    text3: {
        fontSize: 22,
        fontFamily: 'Roboto',
        color: '#2F88F0'
    },
    whatsappLogo: {
        width: 80,
        height: 80,
        marginTop: 50,
        marginLeft: 650,
        marginBottom: 10,
        position: 'absolute' 
    }
});

export default Block8;