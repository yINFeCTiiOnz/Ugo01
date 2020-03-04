import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
const Home = ({navigation}) => {
  return (
    <View>
      <Text>Main</Text>
    </View>
  );
};

Home.navigationOptions = {
  tabBarVisible: false,
};

export default Home;
