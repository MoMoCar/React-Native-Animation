import React from 'react';
import { View, StyleSheet, Text, SafeAreaView, TouchableOpacity } from "react-native";

export default function Home({ navigation }) {
    return (
        <SafeAreaView>
            <Header />

            <NavigationBtn
                title={'BasicExample'}
                navigateTo={() => navigation.navigate('BasicExample')}
                backgroundColor = {{backgroundColor:'#a1cef0'}}
            />

            <NavigationBtn
                title={'BottomSheetExample'}
                navigateTo={() => navigation.navigate('BottomSheetExample')}
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
        style={[styles.btnContainer,props.backgroundColor]}
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