import { Text } from "react-native-paper";
import { useContext, useState } from "react";
import { UnitsContext, WorkoutContext } from './Context';
import { FlatList, View } from "react-native";
import { Avatar, Card, IconButton, SegmentedButtons } from 'react-native-paper';


export default function WorkoutListView(){

    const {workouts} = useContext(WorkoutContext);
    //const {units} = useContext(UnitsContext);
    const [value, setValue] = useState('run');
    

    return(
        <View>
            <SegmentedButtons
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
            <FlatList
                data={workouts}
                renderItem={({item}) => <Item workout={item}/> }
                
            />
        </View>
    );
}

// const sumdistanceByType = workouts.reduce((acc, { type, distance }) => {
//     acc[type] = acc[type] || { type, distance: 0 };
//     acc[type].distance += distance;
//     return acc;  
//   }, {});

function Item({workout}){
    const {units} = useContext(UnitsContext);
    console.log(units);

    return(
        <View>
            
            <Card>
                <Card.Title
                    title={workout.date}
                    left={(props) => <Avatar.Icon {...props} icon={workout.type} />}
                />
                <Card.Content>
                    
                    <Text variant="bodyMedium">Distance: {units==="km" ? workout.distance: (workout.distance*1.60934).toFixed(1)} {units} </Text>                    
                    <Text variant="bodyMedium">Duration: {workout.duration} min</Text>
                    
                </Card.Content>
            </Card>

            
         
        </View>
    );
}