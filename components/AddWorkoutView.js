import { View } from "react-native";
import { Modal, Portal, Text, Button, PaperProvider } from 'react-native-paper';
import * as React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { SegmentedButtons } from 'react-native-paper';
import { TextInput } from 'react-native-paper';
import { Icon, MD3Colors } from 'react-native-paper';



export default function AddWorkoutView(){
    const [value, setValue] = React.useState('run');
    const [distance, setDistance] = React.useState('');
    const [duration, setDuration] = React.useState('');

    const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = {backgroundColor: 'white', padding: 20};

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
                        <Text>Example Modal.  Click outside this area to dismiss.</Text>
                    </Modal>
                </Portal>
                <Button mode='contained-tonal' style={{ marginTop: 30 }} onPress={showModal}>
                    Show
                </Button>
           
            <Button mode="contained">Add Workout</Button>
            

        </View>
        
    )
}