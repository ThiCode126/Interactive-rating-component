import React, { useState } from 'react';
import Rating from './Components/Rating';
import Thank from './Components/Thank';

const App = () => {

  const [rating, setRating] = useState(0);
  const [isSubmit, setIsSubmit] = useState(false);

  return (
    <section id="page" className='cw'>
      {
        isSubmit ? (
          <Thank rating={rating} />
        ) : (
          <Rating rating={rating} setRating={setRating} setIsSubmit={setIsSubmit} />
        )
      }

    </section>
  )
}

export default App