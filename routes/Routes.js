import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from "@react-navigation/drawer";
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import Home from '../app/screens/Home';
import Profile from '../app/screens/Profile';
import Settings from '../app/screens/Settings';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator()
const Drawer = createDrawerNavigator();

const screenOptionStyle = {
    headerStyle: {
        backgroundColor: "#000",
    },
    headerTintColor: "white",
    headerBackTitle: "Back",
};

function MainStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}

function ProfileStackNavigator() {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}
function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home-sharp'
                : 'home-outline';
            } else if (route.name === 'Profile') {
              iconName = focused 
              ? 'person-circle-sharp' 
              : 'person-circle-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={30} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#000',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={MainStackNavigator} />
        <Tab.Screen name="Profile" component={ProfileStackNavigator} />
    </Tab.Navigator>
  );
}

export default function Routes() {
    return (
        <NavigationContainer>
          <Drawer.Navigator>
            <Drawer.Screen name="Home" component={TabNavigator} />
            <Drawer.Screen name="Profile" component={ProfileStackNavigator} />
          </Drawer.Navigator>
        </NavigationContainer>
    )
}
