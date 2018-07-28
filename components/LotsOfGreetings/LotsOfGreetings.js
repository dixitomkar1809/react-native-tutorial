import React, {Component} from 'react';
import {Text, View} from 'react-native';

class Greetings extends Component{
    render(){
        return(
            <Text>Hello {this.props.name} !</Text>
        )
    }
}
export default class LotsOfGreetings extends Component{
    render(){
        return(
            <View>
                <Greetings name="Omkar" />
                <Greetings name="Nandkumar" />
                <Greetings name="Varsha" />
                <Greetings name="Nikhil" />
            </View>
        )
    }
}