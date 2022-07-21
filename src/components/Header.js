import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withSpring, withTiming } from 'react-native-reanimated';
import COLOR from '../tools/COLOR';

export default function Header(props) {

    const scale = useSharedValue(1);
    const opacity = useSharedValue(1);

    const textStyle = useAnimatedStyle(() => {
        return {
            opacity: opacity.value,
            transform: [
                { scale: scale.value }
            ],
        }
    })

    useEffect(() => {
        scale.value = withRepeat(withTiming(1.1, { duration: 500 }), -1, true)
        opacity.value = withRepeat(withSpring(0.5), -1, true)
    },[])

    return (
        <Animated.View style={[styles.container, textStyle]}>
            <Text style={styles.mainTitle}>Yo! Yo!</Text>
            <Text style={styles.subTitle}>煎饼果子来一套</Text>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 30,
    },
    mainTitle: {
        fontSize: 40,
        fontWeight: '800',
        color: '#fff'
    },
    subTitle: {
        fontSize: 24,
        color: '#fff'
    }
})