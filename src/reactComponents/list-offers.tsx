import {JSX} from 'react';
import {Offers} from '../types/offer.ts';
import OfferCard from './offer-card.tsx';

type OfferListProps = {
  offers: Offers;
  onOfferHover?: (offerId: number | null) => void;
};

function ListOffers({offers, onOfferHover} : OfferListProps) : JSX.Element {
  const handleOfferMouseEnter = (offerId: number) => {
    onOfferHover?.(offerId);
  };
  const handleOfferMouseLeave = () => {
    onOfferHover?.(null);
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
