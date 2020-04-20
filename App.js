import * as React from 'react';
import {
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  View,
  Dimensions,
  SafeAreaView,
} from 'react-native';

export default function App() {
  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={styles.container}
      keyboardVerticalOffset={200}>
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1}}>
          <TextInput style={styles.paragraph} placeholder="Click here" />
          <View style={styles.button} />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const {width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    position: 'absolute',
    backgroundColor: 'blue',
    width: width,
    height: 20,
    bottom: 0,
    left: 0,
  },
});
