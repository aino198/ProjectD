import { View, Text, StyleSheet, Image } from "react-native";
import img1 from "../../img/4.png"

export default function P1() {
    return (
        <View style={styles.main}>
            <Image source={img1} style={styles.img1} />
            <View style={styles.block1}>
                <Text style={styles.text1}>
                    АЭБ против мошенников
                </Text>
            </View>
            <View style={styles.block2}>
                <Text style={styles.text2}>
                    Защитим вас от любого вида мошенничества
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
        backgroundColor: '#E5EFFF',
        flex: 1,
        flexDirection: 'row'
    },
    block1: {
        position: 'absolute',
        width: 400,
        height: 34,
        left: 720,
        top: 135
    },
    block2: {
        position: 'absolute',
        width: 556,
        height: 52,
        left: 720,
        top: 214
    },
    img1: {
        width: 483,
        height: 400,
        left: 128,
        top: 0
    }
})