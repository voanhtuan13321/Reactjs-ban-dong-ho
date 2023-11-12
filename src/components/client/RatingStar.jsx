import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

export default function Rating({ isDisable, ratingStar }) {
  const [rating, setRating] = useState(ratingStar ? ratingStar : 0);
  const [hover, setHover] = useState(null);
  const handleClickRating = (ratingValue) => {
    setRating(ratingValue);
  };

  return (
    <div className='flex flex-row justify-center'>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label key={i}>
            <input
              type='radio'
              name='rating'
              className='hidden'
              value={rating}
              onClick={() => {
                handleClickRating(ratingValue);
              }}
              disabled={isDisable}
            />
            <FaStar
              className='transition  cursor-pointer'
              color={ratingValue <= (rating || hover) ? 'gold' : 'gray'}
              onMouseEnter={() => {
                if (!isDisable) {
                  setHover(ratingValue);
                }
              }}
              onMouseLeave={() => setHover(null)}
              size={20}
            />
          </label>
        );
      })}
    </div>
  );
}
