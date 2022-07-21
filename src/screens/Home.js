import React from 'react';
import { View, StyleSheet, Text, SafeAreaView, TouchableOpacity, StatusBar } from "react-native";
import COLOR from '../tools/COLOR';
import Header from '../components/Header';

export default function Home({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={'light-content'}/>
            <Header />
            <NavigationBtn
                title={'BasicExample'}
                navigateTo={() => navigation.navigate('BasicExample')}
                backgroundColor={{ backgroundColor: COLOR[1] }}
            />

            <NavigationBtn
                title={'MovableSquare'}
                navigateTo={() => navigation.navigate('MovableSquare')}
                backgroundColor={{ backgroundColor: COLOR[2] }}
            />

            <NavigationBtn
                title={'ScrollView'}
                navigateTo={() => navigation.navigate('ScrollView')}
                backgroundColor={{ backgroundColor: COLOR[3] }}
            />
            
            <NavigationBtn
                title={'InterpolateColor'}
                navigateTo={() => navigation.navigate('InterpolateColor')}
                backgroundColor={{ backgroundColor: COLOR[4] }}
            />

            <NavigationBtn
                title={'BottomSheetExample'}
                navigateTo={() => navigation.navigate('BottomSheetExample')}
                backgroundColor={{ backgroundColor: COLOR[5] }}
            />

        </SafeAreaView>
    );
}

const NavigationBtn = (props) => (
    <TouchableOpacity
        style={[styles.btnContainer, props.backgroundColor]}
        onPress={() => props.navigateTo()}
    >
        <Text style={styles.btnText}>{props.title}</Text>
    </TouchableOpacity>
)

const goBack = () => {

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black'
    },
    btnContainer: {
        width: 350,
        height: 40,
        borderWidth: 1,
        borderRadius: 20,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: '#76b1ea'
    },
    btnText: {
        fontSize: 18,
    }
})
