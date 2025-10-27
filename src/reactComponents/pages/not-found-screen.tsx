import { JSX } from 'react';
import './not-found-screen.css';

function NotFoundScreen(): JSX.Element {
  return (
    <div className="page--not-found">
      <img
        className="not-found"
        src="img/404.svg"
        alt="Страница не найдена"
        width="500"
        height="500"
      />
      <div className="message">
        Ой, cтраница, которую вы ищете, не существует или была перемещена!
      </div>
    </div>
  );
}

export default NotFoundScreen;
