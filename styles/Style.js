import { StatusBar, StyleSheet } from "react-native";
import { MD3LightTheme, MD3DarkTheme } from "react-native-paper";
import { useTheme } from 'react-native-paper'

export default Style = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight + 5,
        display: "flex",
        flex:1,
        backgroundColor: 'black',
        
                
       
    },
    button: {
        margin: 10
       
    },
    header:{
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10
    },
    formfield:{
        margin: 10,
        

    },
    
})
export const MyTheme = {
        ...MD3DarkTheme,
    roundness: 10,
    
    colors: {
        ...MD3DarkTheme.colors,
        
        
        surface: "rgb(10, 232, 14)",
        surfacevariant: "rgb(10, 232, 14)",
        // "colors": {
        //     "primary": "rgb(0, 107, 2)",
        //     "onPrimary": "rgb(255, 255, 255)",
        //     "primaryContainer": "rgb(118, 248, 226)",
        //     "onPrimaryContainer": "rgb(0, 32, 27)",
        //     "secondary": "rgb(74, 99, 94)",
        //     "onSecondary": "rgb(255, 255, 255)",
        //     "secondaryContainer": "rgb(205, 232, 225)",
        //     "onSecondaryContainer": "rgb(6, 32, 27)",
        //     "tertiary": "rgb(68, 97, 121)",
        //     "onTertiary": "rgb(255, 255, 255)",
        //     "tertiaryContainer": "rgb(202, 230, 255)",
        //     "onTertiaryContainer": "rgb(0, 30, 48)",
        //     "error": "rgb(186, 26, 26)",
        //     "onError": "rgb(255, 255, 255)",
        //     "errorContainer": "rgb(255, 218, 214)",
        //     "onErrorContainer": "rgb(65, 0, 2)",
        //     "background": "rgb(250, 253, 251)",
        //     "onBackground": "rgb(25, 28, 27)",
        //     "surface": "rgb(250, 253, 251)",
        //     "onSurface": "rgb(25, 28, 27)",
        //     "surfaceVariant": "rgb(218, 229, 225)",
        //     "onSurfaceVariant": "rgb(63, 73, 70)",
        //     "outline": "rgb(111, 121, 118)",
        //     "outlineVariant": "rgb(190, 201, 197)",
        //     "shadow": "rgb(0, 0, 0)",
        //     "scrim": "rgb(0, 0, 0)",
        //     "inverseSurface": "rgb(45, 49, 48)",
        //     "inverseOnSurface": "rgb(239, 241, 239)",
        //     "inversePrimary": "rgb(85, 219, 198)",
        //     "elevation": {
        //       "level0": "transparent",
        //       "level1": "rgb(238, 246, 243)",
        //       "level2": "rgb(230, 241, 238)",
        //       "level3": "rgb(223, 237, 234)",
        //       "level4": "rgb(220, 236, 232)",
        //       "level5": "rgb(215, 233, 229)"
        //     },
        //     "surfaceDisabled": "rgba(25, 28, 27, 0.12)",
        //     "onSurfaceDisabled": "rgba(25, 28, 27, 0.38)",
        //     "backdrop": "rgba(41, 50, 48, 0.4)"
          //}
    }}