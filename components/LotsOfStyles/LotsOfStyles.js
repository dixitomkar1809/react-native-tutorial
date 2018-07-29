import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class LotsOfStyle extends Component{
    render(){
        return(
            <View>
                <Text style={styles.red}>Just Red</Text>
                <Text style={styles.bigblue}>Big Blue</Text>
                <Text style={[styles.bigblue, styles.red]}>BigBlue and Red class</Text>
                <Text style={[styles.red, styles.bigblue]}>Red and BigBlue class</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bigblue:{
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: "red"
    },
});