import React from 'react';
import { View, StyleSheet, Text } from "react-native";
import Animated, {useAnimatedScrollHandler, useSharedValue} from 'react-native-reanimated';
import COLOR from '../tools/COLOR';
import Page from '../components/Page';

//define your words here
const WORDS = ['Hello','Welcome','to','Steer'];

export default function ScrollView(props) {
    const translateX = useSharedValue(0);

    const scrollHandler = useAnimatedScrollHandler((event) => {
        translateX.value =  event.contentOffset.x
    })
    return (
        <Animated.ScrollView 
            style = {styles.container} 
            horizontal
            onScroll={scrollHandler}
            scrollEventThrottle={16}
            pagingEnabled
        >
            {
                WORDS.map((title, index) => {
                    return (
                        <Page 
                            key = {index.toString()} 
                            title = {title} 
                            index = {index}
                            translateX = {translateX}
                        />
                    )
                })
            }
        </Animated.ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: COLOR[3],
    }
})