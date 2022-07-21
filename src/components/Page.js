import React, { useEffect } from 'react';
import { View, StyleSheet, Text, Dimensions } from "react-native";
import Animated, { Extrapolate, interpolate, useAnimatedScrollHandler, useAnimatedStyle } from 'react-native-reanimated';
import COLOR from '../tools/COLOR';

const { height, width } = Dimensions.get('window');
const SIZE = width * 0.7;


export default function Page({ index, title, translateX }) {

    const RANGE = [(index - 1) * width, index * width, (index + 1) * width];

    const rStyle = useAnimatedStyle(() => {
        const scale = interpolate(
            translateX.value,
            RANGE,
            [0, 1, 0],
            Extrapolate.CLAMP
        )

        const borderRadius = interpolate(
            translateX.value,
            RANGE,
            [0, SIZE/2, 0],
            Extrapolate.CLAMP
        )
        return {
            borderRadius,
            transform: [
                { scale }
            ]
        }
    })

    const rTextStyle = useAnimatedStyle(() => {
        const translateY = interpolate(
            translateX.value,
            RANGE,
            [height, 0, -height],
            Extrapolate.CLAMP
        )
        const opacity = interpolate(
            translateX.value,
            RANGE,
            [-5,1,-5],
            Extrapolate.CLAMP,
        )
        return {
            opacity,
            transform: [
                { translateY },
                { translateX: translateY }
            ]
        }
    })

    return (
        <View style={[styles.container, { backgroundColor: COLOR[index] }]}>
            <Animated.View style={[styles.square, rStyle,{ backgroundColor: COLOR[index + 1] }]} />
            <Animated.View style={[rTextStyle, { position: 'absolute' }]}>
                <Text style={styles.text}>{title}</Text>
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height,
        width,
        alignItems: 'center',
        justifyContent: 'center'
    },
    square: {
        width: SIZE,
        height: SIZE,
    },
    text: {
        fontSize: 60,
        color: 'white',
        fontWeight: '700'
    }
})