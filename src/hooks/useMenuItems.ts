import {useEffect, useState} from 'react';
import {MenuItem} from '@/types/menuItem';
import {
  Pizza_BBQ,
  Pizza_Pepperoni,
  Pizza_Denver_Special,
  Pizza_Plain,
  Pizza_Veggie,
} from '@/assets/images';

type Category = {
  title: string;
  items: MenuItem[];
};

export default function useMenuItems() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [featured, setFeatured] = useState<MenuItem[]>([]);

  useEffect(() => {
    // fetch data

    setCategories([
      {
        title: 'Specialty',
        items: [
          {
            id: '3',
            title: 'Denver Special',
            description:
              'Mushrooms, Green Peppers, Onions, Olives, Tomato Sauce, Pepperoni',
            price: 14.99,
            image: Pizza_Denver_Special,
          },
        ],
      },
      {
        title: 'Meats',
        items: [
          {
            id: '1',
            title: 'BBQ',
            description: 'Chicken, BBQ Sauce, Red Onion',
            price: 12.99,
            image: Pizza_BBQ,
          },
          {
            id: '2',
            title: 'Pepperoni',
            description: 'Pepperoni, Mozzarella, Tomato Sauce',
            price: 12.99,
            image: Pizza_Pepperoni,
          },
        ],
      },
      {
        title: 'Vegetarian',
        items: [
          {
            id: '4',
            title: 'Plain',
            description: 'Mozzarella, Tomato Sauce',
            price: 10.99,
            image: Pizza_Plain,
          },
          {
            id: '5',
            title: 'Veggie',
            description:
              'Mushrooms, Green Peppers, Onions, Olives, Tomato Sauce',
            price: 14.99,
            image: Pizza_Veggie,
          },
        ],
      },
    ]);

    setFeatured([
      {
        id: '3',
        title: 'Denver Special',
        description:
          'Mushrooms, Green Peppers, Onions, Olives, Tomato Sauce, Pepperoni',
        price: 14.99,
        image: Pizza_Denver_Special,
      },
      {
        id: '2',
        title: 'Pepperoni',
        description: 'Pepperoni, Mozzarella, Tomato Sauce',
        price: 12.99,
        image: Pizza_Pepperoni,
      },
      {
        id: '4',
        title: 'Plain',
        description: 'Mozzarella, Tomato Sauce',
        price: 10.99,
        image: Pizza_Plain,
      },
    ]);
  }, []);

  return {
    categories,
    featured,
  };
}
