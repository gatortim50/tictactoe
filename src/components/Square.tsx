import React from 'react';
import { Dimensions, StyleSheet, View, TouchableHighlight } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTimes, faCircleNotch } from '@fortawesome/free-solid-svg-icons';

const squareSize = (Dimensions.get('window').width - 100) / 3;

function Square({ onPress, value }) {
  let renderIcon = () => {
    switch (value) {
      case 'X':
        return (
          <FontAwesomeIcon
            icon={faTimes}
            size={squareSize - 30}
            color="white"
          />
        );
      case 'O':
        return (
          <FontAwesomeIcon
            icon={faCircleNotch}
            size={squareSize - 30}
            color="white"
          />
        );
      default:
        return;
    }
  };

  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
      onPress={onPress}
    >
      <View style={styles.square}>{renderIcon(value)}</View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  square: {
    width: squareSize,
    height: squareSize,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Square;
