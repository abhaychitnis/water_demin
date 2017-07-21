import React from 'react';
import { View, Dimensions } from 'react-native';
import EntryLogIn from './EntryLogIn';

const EntryForm = () => {
  const window = Dimensions.get('window');

  const width = (2 * window.width) / 3;
  const height = window.height / 4;
  return (
    <View
    style={{
      flex: 1,
      backgroundColor: '#1f6f90',
      alignItems: 'center',
      justifyContent: 'center'
      }}
    >
      <View
        style={{ height, width }}
      >
        <EntryLogIn />
      </View>
    </View>
  );
};

export default EntryForm;
