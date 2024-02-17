import { Text, RadioButton, PaperProvider, Card } from "react-native-paper";
import { useContext, useEffect, useState } from "react";
import { Alert, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { WorkoutContext, UnitsContext } from "./Context";

export default function SettingsView() {

    const [unit, setUnit] = useState("km");
    const { units, setUnits } = useContext(UnitsContext);


    const changeUnits = (value) => {
        setUnit(value)
        setUnits(value)
        Alert.alert('Units was changed to ' + value)
       
    }
    //console.log(units)


    return (
        <View>
            <Text variant="headlineLarge">Settings</Text>
            <Card>
                <RadioButton.Group onValueChange={changeUnits} value={unit} >
                    <RadioButton.Item label="Kilometers" value="km" />
                    <RadioButton.Item label="Miles" value="miles" />
                </RadioButton.Group>
            </Card>


        </View>
    )
}