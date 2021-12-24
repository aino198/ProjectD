import { View, Text, StyleSheet, Image } from "react-native";
import img1 from "../../img/4.png"

export default function P1() {
    return (
        <View style={styles.main}>
            <View style={styles.line1}></View>
            <View style={styles.line2}></View>
            <View style={styles.line3}></View>
            <View style={styles.line4}></View>
            <View style={styles.line5}></View>
            <View style={styles.line6}></View>
            <View style={styles.block1}>
                <Text style={styles.text1}>
                    Тарифы за обслуживание
                </Text>
            </View>
            <View style={styles.block2}>
                <Text style={styles.text2}>
                    Бесплатно первые 6 месяцев
                </Text>
            </View>
            <View style={styles.block3}>
                <Text style={styles.text3}>
                    Для развития
                </Text>
            </View>
            <View style={styles.block4}>
                <Text style={styles.text3}>
                    Для старта
                </Text>
            </View>
            <View style={styles.block5}>
                <Text style={styles.text3}>
                    Для бизнеса
                </Text>
            </View>
            <View style={styles.block6}>
                <Text style={styles.text3}>
                    Для больших {'\n'}
                    планов
                </Text>
            </View>
            <View style={styles.block7}>
                <Text style={styles.text4}>
                    Первые 6 месяцев - {'\n'}
                    бесплатно, далее 990 ₽ в {'\n'}
                    месяц
                </Text>
            </View>
            <View style={styles.block8}>
                <Text style={styles.text4}>
                    0 ₽ в месяц
                </Text>
            </View>
            <View style={styles.block9}>
                <Text style={styles.text4}>
                    Можно{'\n'}
                    подключить{'\n'}
                    только 1 счёт
                </Text>
            </View>
            <View style={styles.block10}>
                <Text style={styles.text4}>
                    1200 ₽ в месяц
                </Text>
            </View>
            <View style={styles.block11}>
                <Text style={styles.text4}>
                    3990 ₽ в месяц
                </Text>
            </View>
            <View style={styles.block12}>
                <Text style={styles.text5}>
                    Кому подходит?
                </Text>
            </View>
            <View style={styles.block13}>
                <Text style={styles.text5}>
                    Платежи юрлицам и ИП внутри АЭБ
                </Text>
            </View>
            <View style={styles.block14}>
                <Text style={styles.text5}>
                    Платежи юрлицам и ИП внутри АЭБ
                </Text>
            </View>
            <View style={styles.block15}>
                <Text style={styles.text5}>
                    Перевод на личную карту физлица АЭБ {'\n'}
                    со счёта ИП
                </Text>
            </View>
            <View style={styles.block16}>
                <Text style={styles.text5}>
                    Пополнение через кассу
                </Text>
            </View>
            <View style={styles.block17}>
                <Text style={styles.text5}>
                    Пополнение по корп. карте через{'\n'}
                    банкомат
                </Text>
            </View>
            <View style={styles.block18}>
                <Text style={styles.text5}>
                    Выдача наличных по корп. карте через{'\n'}
                    банкоматы АЭБ и банкоматы банков,{'\n'}
                    входящих в группу ВТБ
                </Text>
            </View>
            <View style={styles.block19}>
                <Text style={styles.text5}>
                    Выдача наличных по корп. карте через{'\n'}
                    банкоматы других банков
                </Text>
            </View>
            <View style={styles.block20}>
                <Text style={styles.text6}>
                    Для микро-бизнеса
                </Text>
            </View>
            <View style={styles.block21}>
                <Text style={styles.text6}>
                    Бесплатно
                </Text>
            </View>
            <View style={styles.block22}>
                <Text style={styles.text6}>
                    Бесплатно
                </Text>
            </View>
            <View style={styles.block23}>
                <Text style={styles.text6}>
                    до 300 000 ₽{'\n'}
                    бесплатно, далее - от{'\n'}
                    1%
                </Text>
            </View>
            <View style={styles.block24}>
                <Text style={styles.text6}>
                    0,2% от суммы, но не{'\n'}
                    менее 150 ₽
                </Text>
            </View>
            <View style={styles.block25}>
                <Text style={styles.text6}>
                    0,05% от суммы{'\n'}
                    операции, но не{'\n'}
                    менее 50 ₽
                </Text>
            </View>
            <View style={styles.block26}>
                <Text style={styles.text6}>
                    1%
                </Text>
            </View>
            <View style={styles.block27}>
                <Text style={styles.text6}>
                    2%, но не менее 120{'\n'}
                    руб.
                </Text>
            </View>
            <View style={styles.block28}>
                <Text style={styles.text6}>
                    Для всех{'\n'}
                    предпринимателей {'\n'}
                    предприятий
                </Text>
            </View>
            <View style={styles.block29}>
                <Text style={styles.text6}>
                    Бесплатно
                </Text>
            </View>
            <View style={styles.block30}>
                <Text style={styles.text6}>
                    30 ₽ платеж
                </Text>
            </View>
            <View style={styles.block31}>
                <Text style={styles.text6}>
                    до 150 000 ₽{'\n'}
                    бесплатно, далее - от{'\n'}
                    1%
                </Text>
            </View>
            <View style={styles.block32}>
                <Text style={styles.text6}>
                    0,2% от суммы, но не{'\n'}
                    менее 150 ₽
                </Text>
            </View>
            <View style={styles.block33}>
                <Text style={styles.text6}>
                    0,05% от суммы{'\n'}
                    операции, но не{'\n'}
                    менее 50 ₽
                </Text>
            </View>
            <View style={styles.block34}>
                <Text style={styles.text6}>
                    1%
                </Text>
            </View>
            <View style={styles.block35}>
                <Text style={styles.text6}>
                    2%, но не менее 120{'\n'}
                    руб.
                </Text>
            </View>
            <View style={styles.block36}>
                <Text style={styles.text6}>
                    Для всех{'\n'}
                    предпринимателей и предприятий
                </Text>
            </View>
            <View style={styles.block37}>
                <Text style={styles.text6}>
                    Для всех{'\n'}
                    предпринимателей и предприятий
                </Text>
            </View>
            <View style={styles.block38}>
                <Text style={styles.text6}>
                    30 платежей{'\n'}
                    бесплатно, далее{'\n'}
                    30 ₽ платеж
                </Text>
            </View>
            <View style={styles.block39}>
                <Text style={styles.text6}>
                    до 300 000 ₽{'\n'}
                    бесплатно, далее - от{'\n'}
                    1%
                </Text>
            </View>
            <View style={styles.block40}>
                <Text style={styles.text6}>
                    0,2% от суммы, но не{'\n'}
                    менее 150 ₽
                </Text>
            </View>
            <View style={styles.block41}>
                <Text style={styles.text6}>
                    0,05% от суммы{'\n'}
                    операции, но не{'\n'}
                    менее 50 ₽
                </Text>
            </View>
            <View style={styles.block42}>
                <Text style={styles.text6}>
                    1%
                </Text>
            </View>
            <View style={styles.block43}>
                <Text style={styles.text6}>
                    2%, но не менее 120{'\n'}
                    руб.
                </Text>
            </View>
            <View style={styles.block44}>
                <Text style={styles.text6}>
                    Для всех{'\n'}
                    предпринимателей и предприятий
                </Text>
            </View>
            <View style={styles.block45}>
                <Text style={styles.text6}>
                    Для всех{'\n'}
                    предпринимателей и предприятий
                </Text>
            </View>
            <View style={styles.block46}>
                <Text style={styles.text6}>
                    100 платежей{'\n'}
                    бесплатно, далее{'\n'}
                    30 ₽ платеж
                </Text>
            </View>
            <View style={styles.block47}>
                <Text style={styles.text6}>
                    до 500 000 ₽{'\n'}
                    бесплатно, далее - от{'\n'}
                    1%
                </Text>
            </View>
            <View style={styles.block48}>
                <Text style={styles.text6}>
                    0,2% от суммы, но не{'\n'}
                    менее 150 ₽
                </Text>
            </View>
            <View style={styles.block49}>
                <Text style={styles.text6}>
                    0,05% от суммы{'\n'}
                    операции, но не{'\n'}
                    менее 50 ₽
                </Text>
            </View>
            <View style={styles.block50}>
                <Text style={styles.text6}>
                    1%
                </Text>
            </View>
            <View style={styles.block51}>
                <Text style={styles.text6}>
                    2%, но не менее 120{'\n'}
                    руб.
                </Text>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    text1: {
        fontSize: 34,
        lineHeight: 40,
        fontWeight: 'bold'
    },
    text2: {
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 18,
        lineHeight: 21,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: 'white'
    },
    text3: {
        fontSize: 22,
        lineHeight: 27,
        color: '#2F88F0',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    text4: {
        fontSize: 16,
        lineHeight: 19,
        textAlign: 'center'
    },
    text5: {
        fontSize: 16,
        lineHeight: 19,
        textAlign: 'center',
        color: '#000000',
        fontWeight: 'bold'
    },
    text6: {
        fontSize: 16,
        lineHeight: 19,
        textAlign: 'center',
        color: '#000000',
        fontStyle: 'normal',
        fontWeight: 'normal'
    },
    main: {
        width: '100%',
        height: 1723,
        backgroundColor: '#FFFFFF',
        flex: 1,
        flexDirection: 'row'
    },
    block1: {
        position: 'absolute',
        width: 450,
        height: 34,
        left: 512,
        top: 186
    },
    block2: {
        position: 'absolute',
        width: 170,
        height: 56,
        left: 451,
        top: 323,
        backgroundColor: '#2F88F0',
        borderRadius: 7
    },
    block3: {
        position: 'absolute',
        width: 230,
        height: 29,
        left: 420,
        top: 398
    },
    block4: {
        position: 'absolute',
        width: 230,
        height: 29,
        left: 650,
        top: 398
    },
    block5: {
        position: 'absolute',
        width: 230,
        height: 29,
        left: 880,
        top: 398
    },
    block6: {
        position: 'absolute',
        width: 230,
        height: 51,
        left: 1110,
        top: 398
    },
    block7: {
        position: 'absolute',
        width: 230,
        height: 57,
        left: 421,
        top: 477
    },
    block8: {
        position: 'absolute',
        width: 230,
        height: 15,
        left: 652,
        top: 477
    },
    block9: {
        position: 'absolute',
        width: 230,
        height: 58,
        left: 649,
        top: 511
    },
    block10: {
        position: 'absolute',
        width: 230,
        height: 15,
        left: 879,
        top: 477
    },
    block11: {
        position: 'absolute',
        width: 230,
        height: 15,
        left: 1109,
        top: 477
    },
    block12: {
        position: 'absolute',
        width: 322,
        height: 25,
        left: 99,
        top: 619
    },
    block13: {
        position: 'absolute',
        width: 320,
        height: 25,
        left: 100,
        top: 741
    },
    block14: {
        position: 'absolute',
        width: 320,
        height: 25,
        left: 101,
        top: 863
    },
    block15: {
        position: 'absolute',
        width: 320,
        height: 39,
        left: 99,
        top: 985
    },
    block16: {
        position: 'absolute',
        width: 320,
        height: 39,
        left: 99,
        top: 1121
    },
    block17: {
        position: 'absolute',
        width: 320,
        height: 399,
        left: 99,
        top: 1257
    },
    block18: {
        position: 'absolute',
        width: 320,
        height: 59,
        left: 100,
        top: 1393
    },
    block19: {
        position: 'absolute',
        width: 320,
        height: 59,
        left: 101,
        top: 1549
    },
    block20: {
        position: 'absolute',
        width: 230,
        height: 57,
        left: 419,
        top: 619
    },
    block21: {
        position: 'absolute',
        width: 230,
        height: 57,
        left: 419,
        top: 741
    },
    block22: {
        position: 'absolute',
        width: 230,
        height: 57,
        left: 419,
        top: 863
    },
    block23: {
        position: 'absolute',
        width: 230,
        height: 57,
        left: 419,
        top: 985
    },
    block24: {
        position: 'absolute',
        width: 230,
        height: 57,
        left: 419,
        top: 1121
    },
    block25: {
        position: 'absolute',
        width: 230,
        height: 57,
        left: 419,
        top: 1257
    },
    block26: {
        position: 'absolute',
        width: 230,
        height: 57,
        left: 419,
        top: 1393
    },
    block27: {
        position: 'absolute',
        width: 230,
        height: 57,
        left: 419,
        top: 1549
    },
    block28: {
        position: 'absolute',
        width: 230,
        height: 57,
        left: 649,
        top: 619
    },
    block29: {
        position: 'absolute',
        width: 230,
        height: 57,
        left: 650,
        top: 741
    },
    block30: {
        position: 'absolute',
        width: 230,
        height: 57,
        left: 650,
        top: 863
    },
    block31: {
        position: 'absolute',
        width: 230,
        height: 57,
        left: 652,
        top: 985
    },
    block32: {
        position: 'absolute',
        width: 230,
        height: 57,
        left: 650,
        top: 1121
    },
    block33: {
        position: 'absolute',
        width: 230,
        height: 57,
        left: 650,
        top: 1257
    },
    block34: {
        position: 'absolute',
        width: 230,
        height: 57,
        left: 649,
        top: 1393
    },
    block35: {
        position: 'absolute',
        width: 230,
        height: 57,
        left: 649,
        top: 1549
    },
    block36: {
        position: 'absolute',
        width: 230,
        height: 57,
        left: 882,
        top: 619
    },
    block37: {
        position: 'absolute',
        width: 230,
        height: 57,
        left: 879,
        top: 741
    },
    block38: {
        position: 'absolute',
        width: 230,
        height: 57,
        left: 882,
        top: 863
    },
    block39: {
        position: 'absolute',
        width: 230,
        height: 57,
        left: 882,
        top: 985
    },
    block40: {
        position: 'absolute',
        width: 230,
        height: 57,
        left: 882,
        top: 1121
    },
    block41: {
        position: 'absolute',
        width: 230,
        height: 57,
        left: 879,
        top: 1257
    },
    block42: {
        position: 'absolute',
        width: 230,
        height: 57,
        left: 882,
        top: 1393
    },
    block43: {
        position: 'absolute',
        width: 230,
        height: 57,
        left: 881,
        top: 1549
    },
    block44: {
        position: 'absolute',
        width: 230,
        height: 57,
        left: 1110,
        top: 619
    },
    block45: {
        position: 'absolute',
        width: 230,
        height: 57,
        left: 1110,
        top: 741
    },
    block46: {
        position: 'absolute',
        width: 230,
        height: 57,
        left: 1109,
        top: 863
    },
    block47: {
        position: 'absolute',
        width: 230,
        height: 57,
        left: 1109,
        top: 985
    },
    block48: {
        position: 'absolute',
        width: 230,
        height: 57,
        left: 1109,
        top: 1121
    },
    block49: {
        position: 'absolute',
        width: 230,
        height: 57,
        left: 1112,
        top: 1257
    },
    block50: {
        position: 'absolute',
        width: 230,
        height: 57,
        left: 1111,
        top: 1393
    },
    block51: {
        position: 'absolute',
        width: 230,
        height: 57,
        left: 1112,
        top: 1549
    },
    img1: {
        width: 483,
        height: 400,
        left: 128,
        top: 0
    },
    line1: {
        position: 'absolute',
        width: 1,
        height: 1325,
        left: 422,
        top: 298,
        borderColor: '#D5E8FC',
        borderLeftWidth: 2
    },
    line2: {
        position: 'absolute',
        width: 1,
        height: 1317,
        left: 650,
        top: 306,
        borderColor: '#D5E8FC',
        borderLeftWidth: 2
    },
    line3: {
        position: 'absolute',
        width: 1,
        height: 1317,
        left: 880,
        top: 306,
        borderColor: '#D5E8FC',
        borderLeftWidth: 2
    },
    line4: {
        position: 'absolute',
        width: 1,
        height: 1317,
        left: 1110,
        top: 306,
        borderColor: '#D5E8FC',
        borderLeftWidth: 2
    },
    line5: {
        position: 'absolute',
        width: 1,
        height: 1325,
        left: 1339,
        top: 298,
        borderColor: '#D5E8FC',
        borderLeftWidth: 2
    },
    line6: {
        position: 'absolute',
        width: 1241,
        height: 1,
        left: 101,
        top: 1672,
        borderColor: '#D5E8FC',
        borderBottomWidth: 2
    }
})