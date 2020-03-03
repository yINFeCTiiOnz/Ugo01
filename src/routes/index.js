import React from 'react';
import {Image, TouchableOpacity, StyleSheet, Platform} from 'react-native';
//import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';

import Home from '../pages/home';
import Settings from '../pages/settings';

const Stack = createStackNavigator();
Icon.loadFont();
function LogoTitle() {
  return (
    <Image
      style={styles.logo}
      source={require('../images/interface/icone_topo.png')}
    />
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
}
export default function Routes({navigation}) {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        options={{
          headerTitle: props => <LogoTitle {...props} />,
          headerLeft: () => (
            <TouchableOpacity style={styles.menu} onPress={MyDrawer}>
              <Icon name="navicon" size={25} color="#7030a0" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              style={styles.settings}
              onPress={() => navigation.navigate('Settings')}>
              <Icon name="user" size={25} color="#7030a0" />
            </TouchableOpacity>
          ),
        }}
        component={Home}
      />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  menu: {
    marginLeft: 10,
  },
  logo: {
    marginLeft: Platform.OS === 'ios' ? 0 : 75,
    width: 48,
    height: 22,
  },
  settings: {
    marginRight: 10,
  },
});
