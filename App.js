import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HelloWorld from './components/HelloWorld/HelloWorld';
import Bananas from './components/Bananas/Bananas';
import LotsOfGreetings from './components/LotsOfGreetings/LotsOfGreetings';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <LotsOfGreetings />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkgray',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
