import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome';

import Home from '../pages/home';
import Settings from '../pages/settings';
import Main from '../pages/main';
import Task from '../pages/task';

export default createAppContainer(
  createSwitchNavigator({
    Novo: createBottomTabNavigator({
      Nome: createStackNavigator({
        Home,
        Main,
      }),
      Home,
      Featured: {
        screen: Home,
        navigationOptions: {
          title: "",
          tabBarIcon: ({tintColor, focused}) => (
            <View
              style={{
                backgroundColor: '#f66',
                width: 75,
                height: 75,
                borderRadius: 50,
                alignContent: 'center',
                justifyContent: 'center',
              }}>
            </View>
          ),
        },
      },
      Settings,
      Task,
    }),
  }),
);
