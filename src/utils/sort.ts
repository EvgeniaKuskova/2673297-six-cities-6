import { Offer } from '../types/offer';
import {SortType} from '../types/sort.ts';

export const sortOffers = (offers: Offer[], sortType: SortType): Offer[] => {
  const sortedOffers = [...offers];

  switch (sortType) {
    case 'Price: low to high':
      return sortedOffers.sort((a, b) => a.price - b.price);
    case 'Price: high to low':
      return sortedOffers.sort((a, b) => b.price - a.price);
    case 'Top rated first':
      return sortedOffers.sort((a, b) => b.rating - a.rating);
    case 'Popular':
    default:
      return offers; // Исходный порядок
  }
};
