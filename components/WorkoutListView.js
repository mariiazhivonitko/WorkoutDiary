import { Text } from "react-native-paper";
import { useContext } from "react";
import { UnitsContext, WorkoutContext } from './Context';
import { FlatList, View } from "react-native";
import { Avatar, Card, IconButton } from 'react-native-paper';


export default function WorkoutListView(){

    const {workouts} = useContext(WorkoutContext);

    return(
        <View>
            <FlatList
                data={workouts}
                renderItem={({item}) => <Item workout={item}/> }
            />
        </View>
    );
}

function Item({workout}){

    
    let iconName = workout.type
    return(
        <View>
            <Card>
                <Card.Title
                    title={workout.date}
                    left={(props) => <Avatar.Icon {...props} icon={workout.type} />}
                />
                <Card.Content>
                    <Text variant="bodyMedium">Distance: {workout.distance}</Text>
                    <Text variant="bodyMedium">Duration: {workout.duration}</Text>
                </Card.Content>
            </Card>

            
         
        </View>
    );
}