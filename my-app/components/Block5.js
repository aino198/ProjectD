import { View, Text, StyleSheet, Image } from "react-native";
import img1 from "../../img/3.png"

export default function P1() {
    return (
        <View style={styles.main}>
            <Image source={img1} style={styles.img1} />
            <View style={styles.block1}>
                <Text style={styles.text1}>
                    Регистрация ИП
                </Text>
            </View>
            <View style={styles.block2}>
                <Text style={styles.text2}>
                    Без доверенностей, нотариусов и госпошлины
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
        top: 137
    },
    block2: {
        position: 'absolute',
        width: 411,
        height: 23,
        left: 190,
        top: 230,
    },
    img1: {
        width: 470,
        height: 300,
        left: 790,
        top: 50
    }
})