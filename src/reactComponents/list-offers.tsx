import {JSX, useState} from 'react';
import {Offers} from '../types/offer.ts';
import OfferCard from './offer-card.tsx';

type OfferListProps = {
  offers: Offers;
};

function ListOffers({offers} : OfferListProps) : JSX.Element {
  const [, setActiveOffer] = useState(0);
  const handleOfferMouseEnter = (offerId: number) => {
    setActiveOffer(offerId);
  };
  const handleOfferMouseLeave = () => {
    setActiveOffer(0);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <div
          key={offer.id}
          className="offer"
          onMouseEnter={() => handleOfferMouseEnter(offer.id)}
          onMouseLeave={handleOfferMouseLeave}
        >
          <OfferCard
            offer={offer}
            inBookmarks={false}
          />
        </div>
      ))}
    </div>
  );
}

export default ListOffers;
