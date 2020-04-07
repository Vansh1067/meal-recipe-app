import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const categoryScreen=()=> {
  return (
    <View style={styles.container}>
      <Text> CAtegories Screen</Text>
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

export default categoryScreen