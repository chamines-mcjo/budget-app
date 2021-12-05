import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

interface TabBarNavigatorProps {
  children: React.ReactNode | Array<React.ReactNode>;
}

const Tab = createBottomTabNavigator();

export const TabBarScreen = Tab.Screen;

export const TabBarNavigator = function TabBarNavigator({children}: TabBarNavigatorProps) {
  return <Tab.Navigator>
    {children}
  </Tab.Navigator>;
};
