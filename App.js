import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Lotsa Koalas.</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#259b35',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
