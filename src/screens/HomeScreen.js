import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>RN STARTER</Text>
      <Button 
        title="Go to Components Demo"
        onPress={() => props.navigation.navigate('Components')}
      />
      <TouchableOpacity
        onPress={() => props.navigation.navigate('List')}
        style={styles.opacityStyle}
      >
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  opacityStyle: {
    margin: 'auto',
    marginTop: 10,
    padding: 10,
    borderColor: 'black',
    borderWidth: 2
  }
});

export default HomeScreen;