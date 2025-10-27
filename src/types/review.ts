import {User} from './user.ts';

export type review = {
  id: number;
  date: string;
  rating: number;
  user: User;
  comment: string;
}
