import { StyleSheet, View } from "react-native";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView
} from 'react-native-gesture-handler';

export default function Index() {

  const outerTap = Gesture.Tap()
    .onStart(() => {
      console.log('Outer tap started');
    })

  const innerTap = Gesture.Tap()
    .numberOfTaps(2)
    .onStart(() => {
      console.log('Inner tap started');
    })
    .simultaneousWithExternalGesture(outerTap)

  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        <GestureDetector gesture={outerTap}>
          <View style={styles.outerSquare}>
            <GestureDetector gesture={innerTap}>
              <View style={styles.innerSquare} />
            </GestureDetector>
          </View>
        </GestureDetector>
      </View>
    </GestureHandlerRootView>
  );
}














const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  outerSquare: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgreen',
    borderRadius: 12,
    padding: 20,
  },
  innerSquare: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
    borderRadius: 12,
  }
})







