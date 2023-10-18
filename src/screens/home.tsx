import {RootStackParamList} from '@/navigations/rootNavigator';
import {StackScreenProps} from '@react-navigation/stack';
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
  ViewProps,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCircleCheck} from '@fortawesome/free-solid-svg-icons/faCircleCheck';
import useMenuItems from '@/hooks/useMenuItems';
import {Logo, Pizza_Denver_Special} from '@/assets/images';
import {Featured} from '@/components/featured';
import {Categories} from '@/components/categories';
import {MenuItem} from '@/types/menuItem';

type HomeScreenProps = StackScreenProps<RootStackParamList, 'Home'>;

export const HomeScreen = ({navigation}: HomeScreenProps) => {
  const handlePress = (item: MenuItem) => {
    navigation.navigate('Modal', {item: item});
  };

  return (
    <ScrollView className={'flex-1'}>
      <Header className={'mb-8'} />

      <View className={'mx-4'}>
        <Featured className={'mb-4 -mr-4'} onPress={handlePress} />
        <Categories onPress={handlePress} />
      </View>
    </ScrollView>
  );
};

const Header = ({style}: ViewProps) => {
  return (
    <View style={style}>
      <Image className={'w-full h-40'} source={Pizza_Denver_Special} />
      <View className={'items-center'}>
        <Image
          className={
            'w-16 h-16 rounded-full -translate-y-8 border-2 border-black'
          }
          source={Logo}
        />
      </View>

      <View className={'mx-4'}>
        <Text className={'text-lg font-bold'}>Hy-Vee Pizza</Text>
        <Text className={'text-gray-500'}>The best pizza there ever was</Text>
      </View>
    </View>
  );
};
