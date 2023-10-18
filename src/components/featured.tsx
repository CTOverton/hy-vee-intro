import {FlatList, Image, Pressable, Text, View, ViewProps} from 'react-native';
import useMenuItems from '@/hooks/useMenuItems';
import {MenuItem} from '@/types/menuItem';

export const Featured = ({
  style,
  onPress = () => {},
}: ViewProps & {onPress?: (item: MenuItem) => void}) => {
  const {featured} = useMenuItems();

  return (
    <View style={style}>
      <Text className={'text-xl font-bold mb-4'}>Featured</Text>
      <FlatList
        horizontal
        data={featured}
        renderItem={({item}) => (
          <Pressable className={'mr-4'} onPress={() => onPress(item)}>
            <Image
              className={'w-36 h-36 rounded-xl mb-2'}
              source={item.image}
            />
            <Text className={'font-bold text-md mb-2'}>{item.title}</Text>
            <Text className={'font-bold text-lg'}>${item.price}</Text>
          </Pressable>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
