import { View } from "react-native";
import { Modal, Portal, Text, Button, PaperProvider } from 'react-native-paper';
import * as React from 'react';
import { useState, useContext } from "react";
import { SafeAreaView, StyleSheet } from 'react-native';
import { SegmentedButtons } from 'react-native-paper';
import { TextInput } from 'react-native-paper';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import { WorkoutContext, UnitsContext } from "./Context";
import Style from "../styles/Style";


//import { Icon, MD3Colors } from 'react-native-paper';




export default function AddWorkoutView(){

    const [value, setValue] = useState('run');
    const [distance, setDistance] = useState('');
    const [duration, setDuration] = useState('');
    
    
    const [visible, setVisible] = useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = {backgroundColor: 'black', padding: 20};

    const [selected, setSelected] = useState('');//to select date in the calendar

    //const {workouts, setWorkouts} = useContext(WorkoutContext);
    const {units} = useContext(UnitsContext);
    const {setWorkouts} = useContext(WorkoutContext); 

    //const [newWorkout, setNewWorkout] = useState({});

    function addWorkout(){
        //const setWorkouts = () => [...prev, {value, distance, duration, selected}]);
        //setNewWorkout({"type":value, "distance": distance, "duration": duration, "date":selected});
        //setWorkouts = () => [...prev, newWorkout];
        if (units==="km")
        {setWorkouts( prev => [...prev, {"type":value, "distance": distance, "duration": duration, "date":selected}])}
        else{setWorkouts( prev => [...prev, {"type":value, "distance": (distance*1.60934).toFixed(1), "duration": duration, "date":selected}])

        };
        setDistance('');
        setDuration('');
        setSelected('');
        //console.log(newWorkout);
    };

    return(
        <View style={Style.container}>

            <Text variant="headlineLarge" style={Style.header}>Add workout</Text>
            <SafeAreaView >
                <SegmentedButtons
                    style = {Style.formfield}
                    value={value}
                    onValueChange={setValue}
                    buttons={[
                        {
                            value: 'run',
                            label: 'Run',
                            icon: 'run-fast'

                        },
                        {
                            value: 'ski',
                            label: 'Ski',
                            icon: 'ski'
                        },
                        {
                            value: 'swim',
                            label: 'Swim',
                            icon: 'swim'
                        },
                    ]}
                />
            </SafeAreaView>
            <TextInput
                label={"Distance ("+ units +')'}
                value={distance}
                onChangeText={setDistance}
                keyboardType='numeric'
                style = {Style.formfield}
               
            />
            <TextInput
                label="Duration (min)"
                value={duration}
                onChangeText={setDuration}
                keyboardType='numeric'
                style = {Style.formfield}
            />

            <Portal>
                <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                    <Calendar
                        onDayPress={day => {
                            setSelected(day.day + '.' + day.month + '.' + day.year);
                            setVisible(false)

                        }}
                        markedDates={{
                            [selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' }
                        }}
                    />
                </Modal>
            </Portal>
            <Button mode='contained-tonal' style={Style.button} onPress={showModal} icon='calendar'>
                {selected ? selected : 'select date'}
            </Button>

            <Button mode="contained" onPress={addWorkout} style={Style.button}>Add Workout</Button>
                     {/* <TextInput style={Style.formfield} label={'Message'} value={msg} onChangeText={setMsg}/> */}
                     {/* <Button style={Style.formfield} mode="contained" onPress={addMessage}>Add message</Button> */}

        </View>
        
    )
}