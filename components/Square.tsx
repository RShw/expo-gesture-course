import { View, StyleSheet } from 'react-native'
import React from 'react'
import {
    Gesture,
    GestureDetector
} from 'react-native-gesture-handler'

const Square = () => {

    const tapOne = Gesture.Tap()
        .numberOfTaps(1)
        .onStart(() => {
            console.log('Tap 1 started');
        });

    const tapTwo = Gesture.Tap()
        .numberOfTaps(2)
        .onStart(() => {
            console.log('Tap 2 started');
        });

    const tapThree = Gesture.Tap()
        .numberOfTaps(3)
        .onStart(() => {
            console.log('Tap 3 started');
        })

    const raceGesture = Gesture.Race(tapOne, tapTwo);
    const finalGesture = Gesture.Simultaneous(
        raceGesture,
        tapThree
    );

    return (
        <GestureDetector gesture={finalGesture}>
            <View style={style.square} />
        </GestureDetector>
    )
}

const style = StyleSheet.create({
    square: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue',
        borderRadius: 12,
    }
})

export default Square







