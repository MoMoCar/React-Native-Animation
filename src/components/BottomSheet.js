import React from 'react';
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

const { height: SCREEN_HEIGHT } = Dimensions.get('window')

export default function BottomSheet(props) {
    const translateY = useSharedValue(0);
    const context = useSharedValue({y:0});

    const gesture = Gesture.Pan()
    .onStart(() => {
        context.value = {y:translateY.value}
    })
    .onUpdate((event) => {
        translateY.value = event.translationY + context.value.y
    })

    const BottomSheetStyle = useAnimatedStyle(() => {
        return{
            transform:[{translateY:translateY.value}]
        }
    })

    return (
        <GestureDetector gesture={gesture}>
            <Animated.View style={[styles.bottomSheetContainer,BottomSheetStyle]}>
                <View style={styles.line} />
            </Animated.View>
        </GestureDetector>

    );
}

const styles = StyleSheet.create({
    bottomSheetContainer: {
        height: SCREEN_HEIGHT,
        width: '100%',
        backgroundColor: '#fff',
        position: 'absolute',
        top: SCREEN_HEIGHT / 1.5,
        borderRadius: 25,
    },
    line: {
        width: 75,
        height: 4,
        backgroundColor: 'grey',
        alignSelf: 'center',
        marginVertical: 15,
        borderRadius: 2,
    }
})