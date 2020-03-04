import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

const Settings = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Text>Mudar de pagina</Text>
      </TouchableOpacity>
      <Text>Settings</Text>
    </View>
  );
};

export default Settings;
