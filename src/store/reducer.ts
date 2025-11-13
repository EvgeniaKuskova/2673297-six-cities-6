import {offers} from '../mocks/offers.ts';
import {createReducer} from '@reduxjs/toolkit';
import {changeCity, setOffers} from './action.ts';
import {State} from '../types/state.ts';

const initialState = {
  city: 'Paris',
  offers: offers,
  filteredOffers: offers.filter((offer) => offer.city === 'Paris')
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload.city;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload.offers;
    });
});

export const getOffersByCity = (state: State) => state.offers.filter((offer) => offer.city === state.city);

export {reducer};
