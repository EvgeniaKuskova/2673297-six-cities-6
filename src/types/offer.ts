import {review} from './review.ts';
import {Point} from './point.ts';

export type Offer = {
  city: string;
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
  point: Point;
};

export type Offers = Offer[];
