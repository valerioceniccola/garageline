import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import CreateVehicleScreen from '../screens/CreateVehicleScreen';
import SettingsScreen from '../screens/SettingsScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Garage',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name="drive-eta"
    />
  ),
};

HomeStack.path = '';

const CreateVehicleStack = createStackNavigator(
    {
      CreateVehicle: CreateVehicleScreen,
    },
    config
);

CreateVehicleStack.navigationOptions = {
  tabBarLabel: 'Aggiungi',
  tabBarIcon: ({ focused }) => (
      <TabBarIcon
          focused={focused}
          name="add-circle"
      />
  ),
};

CreateVehicleStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
      <TabBarIcon
          focused={focused}
          name="settings"
      />
  ),
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  CreateVehicleStack,
  SettingsStack,
});

tabNavigator.path = '';

export default tabNavigator;
