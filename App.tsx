import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Hello Team!</Text>
      <Text style={styles.subtitle}>
        React Native setup completed successfully.
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  subtitle: {
    marginTop: 10,
    fontSize: 18,
  },
});

export default App;