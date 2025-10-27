import {JSX} from 'react';
import MainScreen from '../pages/main-screen.tsx';
import {BrowserRouter, Outlet, Route, Routes} from 'react-router-dom';
import LoginScreen from '../pages/login-screen.tsx';
import OfferScreen from '../pages/offer-screen.tsx';
import NotFoundScreen from '../pages/not-found-screen.tsx';
import PrivateRoute from '../private-root/private-root.tsx';
import {AppRoute, AuthorizationStatus} from '../const.ts';
import FavoritesScreen from '../pages/favorites-screen.tsx';
import {Offers} from '../../types/offer';

type AppScreenProps = {
  offers: Offers;
}

function App({offers}: AppScreenProps) : JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainScreen offers={offers}/>}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginScreen />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <FavoritesScreen favorites={offers}/>
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Offer} element={<Outlet />}>
          <Route path=':id' element={<OfferScreen offers={offers} />} />
          <Route index element={<NotFoundScreen />} />
        </Route>
        <Route
          path={AppRoute.NotFound}
          element={<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
