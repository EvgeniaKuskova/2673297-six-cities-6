import {createAction} from '@reduxjs/toolkit';
import {Offers} from '../types/offer.ts';

export const changeCity = createAction<{city: string}>('changeCity');
export const setOffers = createAction<{offers: Offers}>('setOffers');
