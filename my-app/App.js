import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

import Block3 from './components/Block3';
import Block4 from './components/Block4';
import Block5 from './components/Block5';
import Block6 from './components/Block6';
import Block7 from './components/Block7';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="main">
      <Block3></Block3>
      <Block4></Block4>
      <Block5></Block5>
      <Block6></Block6>
      <Block7></Block7>
      <Footer/>
    </div>
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
