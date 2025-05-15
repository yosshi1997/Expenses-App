import { StatusBar } from 'expo-status-bar';
import { JSX } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Hello from './src/conponents/Hello';

const App = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Hello bang={true}>World</Hello>
      <Hello style={{ fontSize: 16 }}>World</Hello>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View >
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

export default App
