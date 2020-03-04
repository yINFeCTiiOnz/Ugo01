import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Card from './card';
const Home = ({navigation}) => {
  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity onPress={()=> navigation.navigate("Main")}>
      <Text>Mudar de pagina</Text>
      </TouchableOpacity>
    </View>
  );
};


export default Home;
