import React from 'react';
import { View, StyleSheet, Text, SafeAreaView, TouchableOpacity } from "react-native";

export default function Home({ navigation }) {
    return (
        <SafeAreaView>
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
                title={'BottomSheetExample'}
                navigateTo={() => navigation.navigate('BottomSheetExample')}
                backgroundColor={{ backgroundColor: COLOR[4] }}
            />

        </SafeAreaView>
    );
}

const Header = () => {
    return (
        <View>
            <Text>Welcome</Text>
            <Text>React Native Animation</Text>
        </View>
    )
}


const NavigationBtn = (props) => (
    <TouchableOpacity
        style={[styles.btnContainer, props.backgroundColor]}
        onPress={() => props.navigateTo()}
    >
        <Text style={styles.btnText}>{props.title}</Text>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
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

const COLOR = [
    '#ccccdd',
    '#bea9bb',
    '#dddddd',
    '#6199be',
    '#779999',
    '#be88a2',
    '#98bb83',
    '#c2bb85'
]