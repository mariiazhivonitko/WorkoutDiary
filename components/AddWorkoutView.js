import { View } from "react-native";
import { Modal, Portal, Text, Button, PaperProvider } from 'react-native-paper';
import * as React from 'react';
import { useState } from "react";
import { SafeAreaView, StyleSheet } from 'react-native';
import { SegmentedButtons } from 'react-native-paper';
import { TextInput } from 'react-native-paper';
import {Calendar, LocaleConfig} from 'react-native-calendars';

//import { Icon, MD3Colors } from 'react-native-paper';
//import { UnitsContext, WorkoutContext } from './components/Context';



export default function AddWorkoutView(){
    const [value, setValue] = useState('run');
    const [distance, setDistance] = useState('');
    const [duration, setDuration] = useState('');
    
    const [visible, setVisible] = useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = {backgroundColor: 'white', padding: 20};
    const [selected, setSelected] = useState('');

    return(
        <View>
            
            <Text variant="headlineLarge">Add workout</Text>
            <SafeAreaView >
          <SegmentedButtons
            value={value}
            onValueChange={setValue}
            buttons={[
              {
                value: 'run',
                label: 'Run',
                icon:'run-fast'
                
              },
              {
                value: 'ski',
                label: 'Ski',
                icon:'ski'
              },
              { value: 'swim',
                label: 'Swim',
                icon:'swim' },
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

            <Portal>
                <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                    <Calendar
                        onDayPress={day => {
                            setSelected(day.dateString);
                        }}
                        markedDates={{
                            [selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' }
                        }}
                    />
                </Modal>
            </Portal>
            <Button mode='contained-tonal' style={{ marginTop: 30 }} onPress={showModal}>
                Show
            </Button>
           
            <Button mode="contained">Add Workout</Button>
            

        </View>
        
    )
}