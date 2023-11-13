import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import requestHandler from '../../utils/requestHandle';
import { useEffect } from 'react';

export default function Rating({ isDisable, ratingStar, productId }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);

  useEffect(() => {
    if (ratingStar) {
      setRating(ratingStar);
    } else {
      setRating(0);
    }
  }, [ratingStar]);
  const handleClickRating = (ratingValue) => {
    console.log(ratingValue);
    setRating(ratingValue);
    handleRating(ratingValue);
  };
  const handleRating = (ratingValue) => {
    const ratingObject = {
      userID: localStorage.getItem('user_id'),
      productID: productId,
      star: ratingValue,
    };
    requestHandler
      .put('rating/', ratingObject)
      .then((resp) => {
        console.log('rating successfully ', resp);
      })
      .catch((err) => {
        console.error(err);
      });
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
