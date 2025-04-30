import React from 'react';

const Auction = ({ auction, onFavorite, isFavorited }) => {
  const { title, currentBidPrice, timeLeft, image } = auction;

  return (
    <tr className='border  border-gray-300'>
      <td className='flex items-center gap-4 p-3'>
        <img src={image} alt={title} className='w-16 h-16 object-cover rounded' />
        {title}
      </td>
      <td className='text-center'>${currentBidPrice}</td>
      <td className='text-center'>{timeLeft}</td>
      <td className='text-center'>
        <button
          onClick={() => onFavorite(auction)}
          disabled={isFavorited}
          className={`text-2xl ${
            isFavorited ? 'text-red-500 cursor-not-allowed' : 'text-gray-500 hover:text-red-600'
          }`}
        >
          ♥
        </button>
      </td>
    </tr>
  );
};

export default Auction;
