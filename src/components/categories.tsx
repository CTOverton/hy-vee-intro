import useMenuItems from '@/hooks/useMenuItems';
import {FlatList, Image, Pressable, Text, View, ViewProps} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons/faPlus';
import {MenuItem} from '@/types/menuItem';

export const Categories = ({
  style,
  onPress = () => {},
}: ViewProps & {onPress?: (item: MenuItem) => void}) => {
  const {categories} = useMenuItems();

  return (
    <View style={style}>
      <FlatList
        scrollEnabled={false}
        data={categories}
        renderItem={({item: category}) => (
          <View className={'mb-8'}>
            <Text className={'text-xl font-bold mb-4'}>{category.title}</Text>

            <FlatList
              scrollEnabled={false}
              data={category.items}
              renderItem={({item}) => (
                <Pressable className={'flex-row'} onPress={() => onPress(item)}>
                  <View className={'flex-1 border rounded-l-xl p-2 h-36'}>
                    <Text className={'font-bold text-md mb-2'}>
                      {item.title}
                    </Text>
                    <Text
                      className={'font-bold text-sm text-gray-500 mb-2'}
                      numberOfLines={2}>
                      {item.description}
                    </Text>
                    <Text className={'font-bold text-lg'}>${item.price}</Text>
                  </View>
                  <Image
                    className={'w-36 h-36 rounded-r-xl mb-2'}
                    source={item.image}
                  />
                  <View
                    className={
                      'p-2 rounded-full bg-white absolute right-2 bottom-4 shadow'
                    }>
                    <FontAwesomeIcon icon={faPlus} />
                  </View>
                </Pressable>
              )}
              keyExtractor={item => item.id}
            />
          </View>
        )}
        keyExtractor={item => item.title}
      />
    </View>
  );
};
