import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Block1 from './components/block1'; 
import Block8 from './components/block8';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>mayby!</Text>
      <Block1 />
      <Block8 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
