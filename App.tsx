import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Home from './src/views/Home.tsx';

function App (): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Home />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(7,26,93,2551)",

  },
});

export default App;
