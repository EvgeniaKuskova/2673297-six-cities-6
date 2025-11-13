import {User} from './user.ts';

export type Review = {
  id: number;
  date: string;
  rating: number;
  user: User;
  comment: string;
}

export type Reviews = Review[];
