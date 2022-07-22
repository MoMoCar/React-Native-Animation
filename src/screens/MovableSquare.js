import React, { useRef } from 'react';
import { View, StyleSheet, Text, StatusBar, TouchableOpacity } from "react-native";
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';
import COLOR from '../tools/COLOR';
import BackHomeButton from '../components/BackHomeButton';

const SIZE = 50;
const CIRCLE_RADIUS = 150;

export default function MovableSquare(props) {

    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);

    const panGestureEvent = useAnimatedGestureHandler({
        //record coordinates of the square when press(start)
        onStart: (event, context) => {
            context.translateX = translateX.value;
            context.translateY = translateY.value
        },
        //the coordinates of the square is (start + move)
        onActive: (event, context) => {
            translateX.value = event.translationX + context.translateX
            translateY.value = event.translationY + context.translateY
            // console.log('onActive Coordinates X: ', translateX.value, ' Y: ', translateY.value)
        },
        onEnd: (event) => {
            const distance = Math.sqrt(translateX.value ** 2 + translateY.value ** 2)
            if(distance > CIRCLE_RADIUS - SIZE / 2 ){
                translateX.value = withSpring(0);
                translateY.value = withSpring(0);
                alert('Position has been reset!')
                console.log('We could do something fantastic here! ')
            }
        }
    })

    const goBack = () => {
        props.navigation.goBack();
    }

    const rStyle = useAnimatedStyle(() => {
        return {
            transform: [
                { translateX: translateX.value },
                { translateY: translateY.value },
            ]
        }
    })
    return (
        <View style={styles.container}>
            <Text style={styles.title}>If Square is outside the cirle</Text>
            <Text style={[styles.title,{marginTop:30}]}>AI will reset position</Text>
            <StatusBar barStyle={'light-content'} />
            <View style={styles.circle}>
                <PanGestureHandler onGestureEvent={panGestureEvent}>
                    <Animated.View style={[styles.square, rStyle]} />
                </PanGestureHandler>
            </View>

            {/* How to get the coordinates of the Back to Home area */}
            <BackHomeButton onPress = {() => props.navigation.goBack()}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    square: {
        width: SIZE,
        height: SIZE,
        backgroundColor: COLOR[3],
        borderRadius: 10,
        zIndex:3,
    },
    circle: {
        width: CIRCLE_RADIUS * 2,
        height: CIRCLE_RADIUS * 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: CIRCLE_RADIUS,
        borderWidth: 5,
        borderColor: COLOR[4]
    },
    title:{
        color:COLOR[6],
        position:'absolute',
        top:100,
        zIndex:2,
        fontSize:18,
    },
    backHome:{
        backgroundColor:'white',
        width:'80%',
        position:'absolute',
        bottom:50,
        height:70,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:50,
        backgroundColor:COLOR[4],
        zIndex:-1
    }
})

// TODO
// How to drag square to the area that screen could back to home page
// ? how to get the position of the view?
// ? how to calculate the area?