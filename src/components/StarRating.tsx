import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import client from '../api/client';

const StarRating: React.FC = () => {
  const [rating, setRating] = useState<number | null>(null);
  const [hoverRating, setHoverRating] = useState<number | null>(null);

  const handleRating = async (rate: number) => {
    setRating(rate);
    try {
      await client.post('/rating', { rating: rate });
      alert('Rating submitted successfully!');
    } catch (error) {
      console.error('Failed to submit rating', error);
    }
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map((value) => (
        <IconButton
          key={value}
          onClick={() => handleRating(value)}
          onMouseEnter={() => setHoverRating(value)}
          onMouseLeave={() => setHoverRating(null)}
        >
          {value <= (hoverRating || rating || 0) ? <StarIcon /> : <StarBorderIcon />}
        </IconButton>
      ))}
    </div>
  );
};

export default StarRating;
