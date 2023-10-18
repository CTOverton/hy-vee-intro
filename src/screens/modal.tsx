import {RootStackParamList} from "@/navigations/rootNavigator";
import {StackScreenProps} from "@react-navigation/stack";
import {Text, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

type ModalScreenProps = StackScreenProps<RootStackParamList, 'Modal'>

export const ModalScreen = ({navigation}: ModalScreenProps) => {
    return (
        <SafeAreaView className={'flex-1'}>
            <View className={'justify-center items-center flex-1'}>
                <Text>Modal</Text>
            </View>
        </SafeAreaView>
    )
}
