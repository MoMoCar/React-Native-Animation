import React from 'react';
import { View, StyleSheet, Text } from "react-native";

export default function Header(props) {
    return (
        <View style = {styles.container}>
            <Text style={styles.mainTitle}>Welcome</Text>
            <Text style={styles.subTitle}>React Native Animation</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        padding:30,
    },
    mainTitle:{
        fontSize:40,
        fontWeight:'800',
        color:'#fff'
    },
    subTitle:{
        fontSize:24,
        color:'#fff'
    }
})