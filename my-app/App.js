import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import Block1 from './components/block1';
import Block3 from './components/Block3';
import Block4 from './components/Block4';
import Block5 from './components/Block5';
import Block6 from './components/Block6';
import Block7 from './components/Block7';
import Block8 from './components/block8';
import Footer from './components/Footer';

import Head from './components/head1';

export default function App() {
  return (
    <div className="main">
      <Head/>
      <Block1 />
      <Block3></Block3>
      <Block4></Block4>
      <Block5></Block5>
      <Block6></Block6>
      <Block7></Block7>
      <Block8></Block8>
      <Footer/>
    </div>
  );
};
