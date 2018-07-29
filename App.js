import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HelloWorld from './components/HelloWorld/HelloWorld';
import Bananas from './components/Bananas/Bananas';
import LotsOfGreetings from './components/LotsOfGreetings/LotsOfGreetings';
import BlinkApp from './components/BlinkApp/BlinkApp';
import LotsOfStyle from './components/LotsOfStyles/LotsOfStyles';
import FixedDimensionsBasics from './components/FixedDimensionsBasics/FixedDimensionsBasics';
import FlexDimensionsBasics from './components/FlexDimensionsBasics/FlexDimensionsBasics';
import FlexDirectionBasics from './components/FlexDirectionBasics/FlexDirectionBasics';
import JustifyContentBasics from './components/JustifyContentBasics/JustifyContentBasics';
import AlignItemsBasics from './components/AlignItemsBasics/AlignItemsBasics';
import PizzaTranslator from './components/PizzaTranslator/PizzaTranslator';
import ButtonBasics from './components/ButtonBasics/ButtonBasics';
import Touchables from './components/Touchables/Touchables';
import IScrolledDownAndWhatHappenedNextShockedMe from './components/IScrolledDownAndWhatHappenedNextShockedMe/IScrolledDownAndWhatHappenedNextShockedMe';
import FlatListBasics from './components/FlatListBasics/FlatListBasics';
import SectionListBasics from './components/SectionListBasics/SectionListBasics';
import FetchExample from './components/FetchExample/FetchExample';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FetchExample />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop:25,
    flex: 1,
    backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
