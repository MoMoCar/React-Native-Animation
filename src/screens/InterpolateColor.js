import React, { useState } from 'react';
import { View, StyleSheet, Text, Switch, Dimensions, StatusBar, Touchable } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import Animated, { interpolate, interpolateColor, useAnimatedStyle, useDerivedValue, useSharedValue, withTiming } from 'react-native-reanimated';
import BackHomeButton from '../components/BackHomeButton';
import COLOR from '../tools/COLOR';

const Colors = {
    dark: {
        background: '#1e1e1e',
        circle: '#252525',
        text: '#f8f8f8'
    },
    light: {
        background: '#f8f8f8',
        circle: '#fff',
        text: '#1e1e1e'
    },
}

const SWITCH_TRACK_COLOR = {
    true: COLOR[4],
    false: `rgba(0,0,0,0.1)`
}

export default function InterpolateColor(props) {
    const [theme, setTheme] = useState('light')
    const progress = useDerivedValue(() => {
        return theme === 'dark' ? withTiming(1, { duration: 1500 }) : withTiming(0, { duration: 1500 })
    }, [theme]);

    const rStyle = useAnimatedStyle(() => {
        const backgroundColor = interpolateColor(
            progress.value,
            [0, 1],
            [Colors.light.background, Colors.dark.background]
        )
        return {
            backgroundColor
        }
    })
    const rCircleStyle = useAnimatedStyle(() => {
        const backgroundColor = interpolateColor(
            progress.value,
            [0, 1],
            [Colors.light.circle, Colors.dark.circle]
        )
        return {
            backgroundColor
        }
    })

    const rTextStyle = useAnimatedStyle(() => {
        const color = interpolateColor(
            progress.value,
            [0, 1],
            [Colors.light.text, Colors.dark.text]
        )
        return {
            color
        }
    })

    return (
        <>
            <Animated.View style={[styles.container, rStyle]}>
                <StatusBar barStyle={theme === 'dark' ? 'light-content' : 'dark-content'} />
                <Animated.Text style={[styles.text, rTextStyle]}>Theme</Animated.Text>
                <Animated.View style={[styles.circle, rCircleStyle]}>
                    <Animated.Text style={[styles.switchText, rTextStyle]}>light</Animated.Text>
                    <Switch
                        value={theme === 'dark'}
                        onValueChange={(toggled) => {
                            setTheme(toggled ? 'dark' : 'light')
                        }}
                        trackColor={SWITCH_TRACK_COLOR}
                        thumbColor={COLOR[1]}
                    />
                    <Animated.Text style={[styles.switchText, rTextStyle]}>dark</Animated.Text>
                </Animated.View>
                <BackHomeButton onPress = {() => props.navigation.goBack()}/>
            </Animated.View>
            
        </>

    );
}

const SIZE = Dimensions.get('window').width * 0.7
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    circle: {
        flexDirection: 'row',
        width: SIZE,
        height: SIZE,
        borderRadius: SIZE / 2,
        alignItems: 'center',
        backgroundColor: '#fff',
        justifyContent: 'center',
        shadowOffset: {
            width: 0,
            height: 20
        },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 8
    },
    text: {
        fontSize: 70,
        textTransform: 'uppercase',
        fontWeight: '700',
        letterSpacing: 14,
        marginBottom: 25
    },
    switchText: {
        paddingHorizontal: 10,
    }
})