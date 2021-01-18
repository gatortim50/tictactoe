import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';

function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 0,
    flex: 1,
    backgroundColor: 'lightblue',
  },
  view: {
    flex: 1,
  },
});

export default Screen;
