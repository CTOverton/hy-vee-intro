import {RootStackParamList} from '@/navigations/rootNavigator';
import {StackScreenProps} from '@react-navigation/stack';
import {Pressable, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCircleCheck} from '@fortawesome/free-solid-svg-icons/faCircleCheck';

type HomeScreenProps = StackScreenProps<RootStackParamList, 'Home'>;

export const HomeScreen = ({navigation}: HomeScreenProps) => {
  return (
    <SafeAreaView className={'flex-1'}>
      <View className={'justify-center items-center flex-1'}>
        <Text>Menu</Text>
        <Pressable onPress={() => navigation.navigate('Modal')}>
          <Text className={'text-blue-600 my-2'}>Open modal</Text>
        </Pressable>

        <FontAwesomeIcon icon={faCircleCheck} />
      </View>
    </SafeAreaView>
  );
};
