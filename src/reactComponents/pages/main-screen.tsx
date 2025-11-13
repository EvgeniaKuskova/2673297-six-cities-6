import {JSX, useState} from 'react';
import ListOffers from '../list-offers.tsx';
import Map from '../map.tsx';
import {Cities} from '../../mocks/cities.ts';
import {Point} from '../../types/point.ts';
import {useSelector} from 'react-redux';
import {getOffersByCity} from '../../store/reducer.ts';
import ListCities from '../list-cities.tsx';


function MainScreen(): JSX.Element {
  const currentCity = useSelector((state: { city: string }) => state.city);
  const currentCityData = Cities[currentCity];
  const filteredOffers = useSelector(getOffersByCity);
  const POINTS = filteredOffers.map((offer) => offer.point);
  const [selectedPoint, setSelectedPoint] = useState<Point | null>(null);

  const handleListItemHover = (offerId: number | null) => {
    if (offerId === null) {
      setSelectedPoint(null);
      return;
    }

    const currentPoint = POINTS.find((point) => point.id === offerId);
    setSelectedPoint(currentPoint || null);
  };

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <ListCities />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{filteredOffers.length} places to stay in {currentCity}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <ListOffers offers={filteredOffers} onOfferHover={handleListItemHover}/>
            </section>
            <div className="cities__right-section">
              <Map
                city={currentCityData}
                className="cities__map map"
                points={POINTS}
                selectedPoint={selectedPoint!}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
