import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { UnitsContext, WorkoutContext } from './components/Context';
import { MD3LightTheme, PaperProvider } from 'react-native-paper';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import AddWorkoutView from './components/AddWorkoutView';
import WorkoutListView from './components/WorkoutListView';
import SettingsView from './components/SettingsView';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Style from './styles/Style';

const Tab = createMaterialTopTabNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarPosition='bottom' style={Style.container}>
        <Tab.Screen name="addWorkout" options={{title: 'add workout'}} component={AddWorkoutView} />
        <Tab.Screen name="workoutList" options={{title: 'list of workouts'}} component={WorkoutListView} />
        <Tab.Screen name="Settings" options={{title: 'settings'}} component={SettingsView} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default function App() {

  const [workout, setWorkout] = useState([]);
  const [units, setUnits] = useState(true);

  return (
    <WorkoutContext.Provider value = {{workout, setWorkout}}>
      <UnitsContext.Provider value={{units, setUnits}}>
        <PaperProvider theme={MD3LightTheme}>
          <SafeAreaProvider>
            <Navigator />
          </SafeAreaProvider>
          
          
        </PaperProvider>
      </UnitsContext.Provider>
    </WorkoutContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
