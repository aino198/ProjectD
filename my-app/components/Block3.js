import { View, Text, StyleSheet, Image } from "react-native";
import img1 from "../../img/1.png"

export default function P1() {
    return (
        <View style={styles.main}>
            <Image source={img1} style={styles.img1} />
            <View style={styles.block1}>
                <Text style={styles.text1}>
                    Открываем счёт для ИП там, {"\n"}
                    где вам удобно
                </Text>
            </View>
            <View style={styles.block2}>
                <Text style={styles.text2}>
                    Открытие расчётного счёта без посещения офиса
                </Text>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    text1: {
        fontSize: 32,
        lineHeight: 37
    },
    text2: {
        fontSize: 20,
        lineHeight: 23
    },
    main: {
        width: '100%',
        height: 400,
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'row'
    },
    block1: {
        position: 'absolute',
        width: 442,
        height: 71,
        left: 190,
        top: 130
    },
    block2: {
        position: 'absolute',
        width: 476,
        height: 23,
        left: 190,
        top: 246
    },
    img1: {
        width: 425,
        height: 333,
        left: 845,
        top: 33
    }
})