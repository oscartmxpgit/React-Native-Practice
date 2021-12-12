import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import DetailsScreen from './screens/DetailsScreen';
import VideoClubScreen from './screens/VideoclubScreen';
import CurriculumScreen from './screens/CurriculumScreen';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const HomeStack = createStackNavigator();
function HomeStackNavigator() {
  return (

    <HomeStack.Navigator initialRouteName="Home" mode="modal">
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Inicio', headerShown: false }}
      />
      <HomeStack.Screen
        name="Details"
        component={DetailsScreen}
        options={{ title: 'Detalles', headerShown: false }}
      />
      <HomeStack.Screen
        name="VideoClub"
        component={VideoClubScreen}
        options={{ title: 'VideoClub', headerShown: false }}
      />
      <HomeStack.Screen
        name="Curriculum"
        component={CurriculumScreen}
        options={{ title: 'Curriculum', headerShown: false }}
      />
      <HomeStack.Screen
        name="About"
        component={AboutScreen}
        options={{ title: 'About', headerShown: false }}
      />

    </HomeStack.Navigator>
  );
}


function getHeaderTitle(route) {
  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  // In our case, it's "Home" as that's the first screen inside the navigator
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
  switch (routeName) {
    case 'Home':
      return 'Inicio';
    case 'Details':
      return 'Detalles';
  }
}

export default function App() {
  return (
    <NavigationContainer>
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Inicio"
        component={HomeStackNavigator}
        options={({ route }) => ({
          headerTitle: getHeaderTitle(route)
        })}
        listeners={({ navigation }) => ({
          focus: (e) => {
          navigation.navigate('Inicio', { screen: 'Home' })
          }
        })}
      />

      <Drawer.Screen
        name="About"
        component={HomeStackNavigator}
        options={{ title: 'Sobre el autor' }}
        listeners={({ navigation }) => ({
          focus: (e) => {
          navigation.navigate('About', { screen: 'About' })

          }
        })}
      />
    </Drawer.Navigator>
    </NavigationContainer>
  );

}

