import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { UnitsContext, WorkoutContext } from './components/Context';
import { MD3LightTheme, MD3DarkTheme, PaperProvider, Icon } from 'react-native-paper';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import AddWorkoutView from './components/AddWorkoutView';
import WorkoutListView from './components/WorkoutListView';
import SettingsView from './components/SettingsView';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Style, { MyTheme } from './styles/Style';


const Tab = createMaterialTopTabNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        tabBarPosition='bottom' 
        style={Style.container}
        screenOptions={{tabBarActiveTintColor: 'black', 
        tabBarInactiveTintColor: MyTheme.colors.primary,
        tabBarStyle: {backgroundColor: MyTheme.colors.surfaceVariant}}} >
        <Tab.Screen 
          name="addWorkout" 
          options={{title: 'add workout', tabBarIcon: ({color}) => <Icon color={color} source='heart-plus' size={24} />}} 
          component={AddWorkoutView} />
        <Tab.Screen 
          name="workoutList" 
          options={{title: 'list of workouts', tabBarIcon: ({color}) => <Icon color={color} source='format-list-bulleted' size={24} />}} 
          component={WorkoutListView} />
        <Tab.Screen 
          name="Settings" 
          options={{title: 'settings', tabBarIcon: ({color}) => <Icon color={color} source='wrench' size={24} />}} 
          component={SettingsView} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default function App() {

  let firstworkouts = [{type: "run", distance: "5", duration: "40", date: "1.1.2024"},
  {type: "swim", distance: "2", duration: "90", date: "2.1.2024"},
  {type: "ski", distance: "10", duration: "60", date: "3.1.2024"}]

  const [workouts, setWorkouts] = useState(firstworkouts);
  const [units, setUnits] = useState("km");

  return (
    
    <WorkoutContext.Provider value = {{workouts, setWorkouts}}>
      <UnitsContext.Provider value={{units, setUnits}}>
        <PaperProvider theme={MD3DarkTheme}>
          <SafeAreaProvider>
            <Navigator />
          </SafeAreaProvider>       
        </PaperProvider>
      </UnitsContext.Provider>
    </WorkoutContext.Provider>
  );
}

