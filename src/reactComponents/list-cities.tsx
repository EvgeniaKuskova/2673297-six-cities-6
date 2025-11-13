import { JSX } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {changeCity} from '../store/action.ts';
import {Cities} from '../mocks/cities.ts';

type ListCitiesProps = {
  onCityChange?: (city: string) => void;
}

function ListCities({ onCityChange }: ListCitiesProps): JSX.Element {
  const dispatch = useDispatch();
  const currentCity = useSelector((state: { city: string }) => state.city);

  const handleCityClick = (cityName: string) => {
    dispatch(changeCity({ city: cityName }));
    onCityChange?.(cityName);
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {Object.keys(Cities).map((cityName) => (
            <li key={cityName} className="locations__item">
              <a
                className={`locations__item-link tabs__item ${
                  cityName === currentCity ? 'tabs__item--active' : ''
                }`}
                href="#"
                onClick={(evt) => {
                  evt.preventDefault();
                  handleCityClick(cityName);
                }}
              >
                <span>{cityName}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default ListCities;
