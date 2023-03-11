import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '@modules/home/screens/HomeScreen';
import SettingsScreen from '@modules/settings/screens/SettingsScreen';
import useTheme from '@modules/theme/useTheme';
import Text from '@modules/shared/components/base/Text';
import HomeLine from '@modules/shared/assets/icon/HomeLine';
import GearSix from '@modules/shared/assets/icon/GearSix';

type TabBarLabelProps = {
  focused: boolean;
  children: string;
};

type TabbarIconProps = {
  color: string;
  focused: boolean;
  size: number;
};

const Tab = createBottomTabNavigator();

const TabBarLabel = ({ focused, children }: TabBarLabelProps) => {
  return (
    <Text color={focused ? 'purpleLight' : 'black'} fontSize={12} fontWeight="600">
      {children}
    </Text>
  );
};

const HomeTabIcon = ({ color }: TabbarIconProps) => <HomeLine color={color} />;
const SettingsIcon = ({ color }: TabbarIconProps) => <GearSix color={color} />;

const MainBottomNavigation = () => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.purpleLight,
        tabBarStyle: {
          borderTopWidth: 0,
          paddingBottom: 12,
          paddingTop: 8,
          height: 56,
        },
        tabBarLabel: TabBarLabel,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: HomeTabIcon,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ tabBarIcon: SettingsIcon }}
      />
    </Tab.Navigator>
  );
};

export default MainBottomNavigation;
