import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { UnitsContext, WorkoutContext } from './components/Context';
import { MD3LightTheme, PaperProvider } from 'react-native-paper';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import AddWorkout from './components/AddWorkoutView';
import Settings from './components/SettingsView';
import WorkoutList from './components/WorkoutListView';

const Tab = createMaterialTopTabNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="addWorkout" component={AddWorkout} />
        <Tab.Screen name="workoutList" component={WorkoutList} />
        <Tab.Screen name="Settings" component={Settings} />
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
          <Navigator />
          
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
