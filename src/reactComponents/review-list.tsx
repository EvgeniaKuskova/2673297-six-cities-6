import { JSX } from 'react';
import { Reviews } from '../types/review.ts';
import Review from './review.tsx';

type ReviewListProps = {
  reviews: Reviews;
};

function ReviewList({ reviews }: ReviewListProps): JSX.Element {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot; <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <Review key={review.id} reviewData={review} />
        ))}
      </ul>
    </section>
  );
}

export default ReviewList;
