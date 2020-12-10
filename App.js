import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.viewG}>
        <Text style={styles.textG}>Hello there!</Text>
      </View>
      <View style={styles.viewB}>
        <Text style={styles.textB}>Cant't wait to meet you😊</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //flexDirection: 'row',
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },

  viewG: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center'
  },

  viewB: {
    flex: 1,
    backgroundColor: 'blue'
  },

  textG: {
    color: 'gold'
  },

  textB: {
    color: 'skyblue'
  },
});
