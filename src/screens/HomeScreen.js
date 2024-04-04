import React from "react";
import { Text, StyleSheet, Button, View, Touchable, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  const name = 'Buhle';

  return (
    <View>
    <Text style={styles.second}>Getting started with react native</Text>
    <Button 
    title="Go to components demo" 
    onPress={() => {}}
    />

    <TouchableOpacity onPress={() => {}}>
      <Text>Go to List Demo</Text>
    </TouchableOpacity>

  </View>
  
  );
};

const styles = StyleSheet.create({
  first: {
    fontSize: 45,
  },
  second:{
    fontSize: 20
  }
});

export default HomeScreen;
