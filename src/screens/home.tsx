import {RootStackParamList} from "@/navigations/rootNavigator";
import {StackScreenProps} from "@react-navigation/stack";
import {Text, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

type HomeScreenProps = StackScreenProps<RootStackParamList, 'Home'>

export const HomeScreen = ({navigation}: HomeScreenProps) => {
    return (
        <SafeAreaView className={'flex-1'}>
            <View className={'justify-center items-center flex-1'}>
                <Text>Menu</Text>
            </View>
        </SafeAreaView>
    )
}
