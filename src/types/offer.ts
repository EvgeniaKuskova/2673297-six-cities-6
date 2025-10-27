import {review} from './review.ts';

export type Offer = {
  name: string;
  type: string;
  imageUrl: string;
  price: number;
  rating: number;
  isPremium: boolean;
  id: number;
  bedrooms: number;
  maxAdults: number;
  goods: string[];
  reviews: review[];
};

export type Offers = Offer[];
