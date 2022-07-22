import React from 'react';
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import COLOR from '../tools/COLOR';

export default function BackHomeButton(props) {
    return (
        <View style={[styles.container,props.style]}>
            <TouchableOpacity
                onPress={() => props.onPress()}
            >
                <Text style={styles.text}>Back to Home Page</Text>
            </TouchableOpacity>
        </View>
    );
}

const SIZE = Dimensions.get('window').width * 0.5
const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 50,
        width: SIZE,
        height:50,
        backgroundColor:COLOR[1],
        borderRadius: 20,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        color:COLOR[3],
        fontWeight:'900'
    }
})