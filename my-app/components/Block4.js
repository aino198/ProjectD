import { View, Text, StyleSheet, Image } from "react-native";
import img2 from "../../img/2.png"

export default function P1() {
    return (
        <View style={styles.main}>
            <Image source={img2} style={styles.img1} />
            <View style={styles.block1}>
                <Text style={styles.text1}>
                    Регистрация ООО
                </Text>
            </View>
            <View style={styles.block2}>
                <Text style={styles.text2}>
                    С одним учредителем
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
        width: 280,
        height: 34,
        left: 720,
        top: 149
    },
    block2: {
        position: 'absolute',
        width: 427,
        height: 23,
        left: 720,
        top: 228
    },
    img1: {
        width: 406,
        height: 293,
        left: 206,
        top: 53
    }
})