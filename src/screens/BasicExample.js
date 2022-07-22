import React, { useEffect } from 'react';
import { View, StyleSheet, StatusBar } from "react-native";
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withSpring, withRepeat } from 'react-native-reanimated';
import BackHomeButton from '../components/BackHomeButton';

//define square length
const SIZE = 100.0

export default function BasicExample(props) {
    //reanimate style 1
    const progress = useSharedValue(1);
    const scale = useSharedValue(1);
    const reanimatedStyle = useAnimatedStyle(() => {
        return {
            opacity: progress.value,
            borderRadius: (progress.value * SIZE) / 2,
            transform: [{ scale: scale.value }]
        }
    }, [])

    useEffect(() => {
        progress.value = withRepeat(withTiming(0.5, { duration: 3000 }), -1, true);
        scale.value = withRepeat(withTiming(0.75, { duration: 3000 }), -1, true);

    }, [])

    //c
    const opacity = useSharedValue(0.5);
    const scaleR = useSharedValue(1);
    const radius = useSharedValue(0);

    const reanimatedStyle2 = useAnimatedStyle(() => {
        return {
            opacity: opacity.value,
            // borderRadius: radius.value,
            transform: [
                { scale: scaleR.value },
                { rotate: `${radius.value / 10}rad` }
            ],
        }
    }, [])

    useEffect(() => {
        opacity.value = withRepeat(withTiming(1, { duration: 1000 }), -1, true);
        scaleR.value = withRepeat(withTiming(1.5, { duration: 1000 }), -1, true);
        radius.value = withRepeat(withTiming(360, { duration: 36000 }), -1, true);
    }, [])

    //reanimated style 3
    const myColor = useSharedValue('#daf7ef');
    
    const reanimatedStyle3 = useAnimatedStyle(() => {
        return{
            backgroundColor:myColor.value
        }
    })

    useEffect(() => {
        myColor.value = withRepeat( withTiming('#f0c972',{duration:3000}),-1,true);
    },[])

    return (
        <View style={styles.container}>
            <StatusBar barStyle={'light-content'} />
            <View style={styles.graphContainer}>
                <Animated.View
                    style={[styles.circle, reanimatedStyle, { backgroundColor: '#f0c972' }]}
                />
            </View>
            <View style={styles.graphContainer}>
                <Animated.View
                    style={[styles.square, reanimatedStyle2, { backgroundColor: '#467ac9' }]}
                />
            </View>
            <View style={[styles.graphContainer,{marginBottom:50}]}>
                <Animated.View
                    style={[styles.square,reanimatedStyle3,{ backgroundColor: '#668687' }]}
                />
            </View>
            <BackHomeButton onPress = {() => props.navigation.goBack()}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    graphContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    circle: {
        width: SIZE,
        height: SIZE,
        backgroundColor: 'white',
    },
    square: {
        width: SIZE,
        height: SIZE,
        backgroundColor: 'white',
    }
})