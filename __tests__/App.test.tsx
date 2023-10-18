/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '@/App';

import {it} from '@jest/globals';

import renderer from 'react-test-renderer';

import {HomeScreen} from '@/screens/home';
import useMenuItems from '@/hooks/useMenuItems';
import {Featured} from '@/components/featured';
import {Pressable} from 'react-native';

jest.mock('@/hooks/useMenuItems');

const mockUseMenuItems = useMenuItems as jest.MockedFunction<
  typeof useMenuItems
>;

it('renders correctly', () => {
  renderer.create(<App />);
});

describe('<HomeScreen />', () => {
  it('renders correctly', () => {
    mockUseMenuItems.mockReturnValue({
      featured: [],
      categories: [],
    });
    let props: any;
    renderer.create(<HomeScreen {...props} />);
  });
});

describe('<Featured />', () => {
  it('renders correctly', () => {
    mockUseMenuItems.mockReturnValue({
      featured: [],
      categories: [],
    });

    renderer.create(<Featured onPress={jest.fn()} />);
  });

  it('calls onPress when a featured item is pressed', () => {
    const onPressMock = jest.fn();
    const mockData = [
      {
        id: '1',
        title: 'Pizza',
        description: 'Saucy',
        image: 1,
        price: 10,
      },
    ];
    mockUseMenuItems.mockReturnValue({
      featured: mockData,
      categories: [],
    });

    const component = renderer.create(<Featured onPress={onPressMock} />);
    const pressableElements = component.root.findAllByType(Pressable);

    pressableElements[0].props.onPress();

    expect(onPressMock).toHaveBeenCalledWith(mockData[0]);
  });
});
