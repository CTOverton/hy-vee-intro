import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import {HomeScreen} from "@/screens/home";

export type RootStackParamList = {
    Home: undefined
}

const RootStack = createStackNavigator<RootStackParamList>()

export default function RootNavigator() {
    return (
        <NavigationContainer>
        <RootStack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <RootStack.Screen name="Home" component={HomeScreen}/>
        </RootStack.Navigator>
        </NavigationContainer>
    )
}
