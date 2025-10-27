import {Offers} from '../types/offer';

export const offers: Offers = [
  {
    name: 'Beautiful &amp; luxurious apartment at great location',
    type: 'Apartment',
    imageUrl: 'img/apartment-01.jpg',
    price: 120,
    rating: 4,
    isPremium: true,
    id: 1,
    bedrooms: 3,
    maxAdults: 4,
    goods: ['Wi-Fi', 'Fridge', 'Kitchen'],
    reviews: [
      {
        id: 1,
        date: '2024-03-15T10:30:00.000Z',
        user: {
          name: 'Max',
          avatarUrl: 'img/avatar-max.jpg',
          isPro: false
        },
        comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
        rating: 4
      }]},
  {
    name: 'Wood and stone place',
    type: 'Room',
    imageUrl: 'img/room.jpg',
    price: 80,
    rating: 4,
    isPremium: false,
    id: 2,
    bedrooms: 1,
    maxAdults: 1,
    goods: ['Wi-Fi', 'Heating', 'Towels'],
    reviews: []
  },
  {
    name: 'Canal View Prinsengracht',
    type: 'Apartment',
    imageUrl: 'img/apartment-02.jpg',
    price: 132,
    rating: 4,
    isPremium: false,
    id: 3,
    bedrooms: 2,
    maxAdults: 2,
    goods: ['Wi-Fi'],
    reviews: [{
      id: 2,
      date: '2024-03-10T14:22:00.000Z',
      user: {
        name: 'Angelina',
        avatarUrl: 'img/avatar-angelina.jpg',
        isPro: true
      },
      comment: 'The apartment was even better than the photos! Great location and very comfortable bed. Would definitely stay again.',
      rating: 5
    },]
  },
  {
    name: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    imageUrl: 'img/apartment-03.jpg',
    price: 180,
    rating: 5,
    isPremium: true,
    id: 4,
    bedrooms: 1,
    maxAdults: 2,
    goods: ['Cabel TV', 'Washing machine', 'Dishwasher'],
    reviews: [{
      id: 1,
      date: '2025-02-10T13:10:00.000Z',
      user: {
        name: 'Emma',
        avatarUrl: 'img/avatar-angelina.jpg',
        isPro: false
      },
      comment: 'The premium apartment was absolutely worth it! The attention to detail and amenities made our stay exceptional.',
      rating: 5
    }]
  }
];
