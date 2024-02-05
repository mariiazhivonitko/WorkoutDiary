import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import * as React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { SegmentedButtons } from 'react-native-paper';
import { TextInput } from 'react-native-paper';


export default function AddWorkoutView(){
    const [value, setValue] = React.useState('');
    const [distance, setDistance] = React.useState('');
    const [duration, setDuration] = React.useState('');

    return(
        <View>
            <Text>Add workout</Text>
            <SafeAreaView >
          <SegmentedButtons
            value={value}
            onValueChange={setValue}
            buttons={[
              {
                value: 'run',
                label: 'Run',
                
              },
              {
                value: 'ski',
                label: 'Ski',
              },
              { value: 'swim',
                label: 'Swim' },
            ]}
          />
        </SafeAreaView>
        <TextInput
      label="Distance"
      value={distance}
      onChangeText={distance => setDistance(distance)}
    />
    <TextInput
      label="Duration"
      value={duration}
      onChangeText={duration => setDuration(duration)}
    />
    <Button mode="contained">Add Workout</Button>

        </View>
        
    )
}