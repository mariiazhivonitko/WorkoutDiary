import { Text } from "react-native-paper";
import { useContext, useState } from "react";
import { UnitsContext, WorkoutContext } from './Context';
import { FlatList, View } from "react-native";
import { Avatar, Card, IconButton, SegmentedButtons } from 'react-native-paper';
import Style from "../styles/Style";


export default function WorkoutListView(){

    const {workouts} = useContext(WorkoutContext);
    const {units} = useContext(UnitsContext);
    
    //const [value, setValue] = useState('run');
    console.log(sumDistance() + " sum");

    

    function sumDistance(type){
        let sumDist = 0;
        
        for (let i=0; i<workouts.length; i++){
            if (workouts[i].type === type){
            sumDist += +workouts[i].distance;}
        }
        return sumDist;
       // console.log(workouts[2].distance)
    }
    

    return(
        <View style={Style.container}>
            <Text variant="headlineLarge" style={Style.header}>Workouts</Text>
            <SegmentedButtons
                    style = {Style.button}
                    //value={value}
                    //onValueChange={setValue}
                    buttons={[
                        {
                            value: 'run',
                            label: (units === 'km' ? sumDistance("run") : (sumDistance("run") / 1.60934).toFixed(0)) + " " + units,
                            icon: 'run-fast'

                        },
                        {
                            value: 'ski',
                            label: (units === 'km' ? sumDistance("ski") : (sumDistance("ski") / 1.60934).toFixed(0)) + " " + units,
                            icon: 'ski'
                        },
                        {
                            value: 'swim',
                            label: (units === 'km' ? sumDistance("swim") : (sumDistance("swim") / 1.60934).toFixed(0)) + " " + units,
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
        

            <View >

                <Card>
                    <Card.Title
                        title={workout.date}
                        left={(props) => <Avatar.Icon {...props} icon={workout.type} />}
                    />
                    <Card.Content>

                        <Text variant="bodyMedium">Distance: {units === "km" ? workout.distance : (workout.distance /1.60934).toFixed(1)} {units} </Text>
                        <Text variant="bodyMedium">Duration: {workout.duration} min</Text>

                    </Card.Content>
                </Card>



            </View>
       
    );
}