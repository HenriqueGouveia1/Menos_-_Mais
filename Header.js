import React, { Component } from 'react';
import { StatusBar, Text, StyleSheet, View, TouchableOpacity } from 'react-native';

export default class Header extends Component {
  


  render() {
    return (
     <View style={styles.header}>
         <StatusBar backgroundColor='#359253'/>
         <TouchableOpacity  >
           <Text style={styles.title}>MENOS É MAIS</Text>
         </TouchableOpacity>
     </View>
    );
  }
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: '#359253',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomRightRadius: 8,
        borderBottomLeftRadius: 8,
        height: 35,
      },
    title:{
        fontWeight: 'bold',
        color: 'white'
    }
});
