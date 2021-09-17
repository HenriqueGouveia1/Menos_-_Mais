import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Cards  from './Cards'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>MENOS É MAIS</Text>
      <StatusBar style="auto" />
      <Cards/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
