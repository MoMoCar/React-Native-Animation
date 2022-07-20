import React, { useState } from 'react';
import { View, StyleSheet, Text, StatusBar } from "react-native";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet from '../components/BottomSheet';


export default function BottomSheetExample(props) {

    /**
     * StatusBar
     * @params {string} barStyle - only takes 3 options ['default','dar-content','light-content']
     */

    const STYLES = ['default', 'dar-content', 'light-content']
    const [barStyle, setBarStyle] = useState(STYLES[2])

    return (
        <GestureHandlerRootView style = {{flex:1}}>
            <View style={styles.container}>
                <StatusBar barStyle={'light-content'} />
            <BottomSheet/>
            </View>
        </GestureHandlerRootView>

    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        height:300,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center'
    }
})