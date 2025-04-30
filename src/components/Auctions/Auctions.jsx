import React, { useEffect, useState } from 'react';
import Auction from '../Auction/Auction';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Auctions = () => {
  const [auctions, setAuction] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [clicked, setClicked] = useState({});

  useEffect(() => {
    fetch('Gallery.json')
      .then((res) => res.json())
      .then((data) => setAuction(data));
  }, []);

  const handleFavorite = (item) => {
    if (!clicked[item.id]) {
      setFavorites([...favorites, item]);
      setClicked({ ...clicked, [item.id]: true });
      toast.success(`${item.title} added to favorites`);
    }
  };

  const handleRemove = (id) => {
    const removedItem = favorites.find(item => item.id === id);
    setFavorites(favorites.filter(item => item.id !== id));
    setClicked(prev => ({ ...prev, [id]: false }));
    toast.info(`${removedItem?.title} removed from favorites`);
  };

  const total = favorites.reduce((sum, item) => sum + item.currentBidPrice, 0);

  return (
    <div>
      <div className='flex gap-5  rounded-2xl mx-10'>
      {/* Main Auction Table */}
      <div className='w-3/4 bg-white  rounded-2xl p-4'>
        <table className='w-full'>
          <thead className='border border-gray-300'>
            <tr >
              <td className='p-5 w-[45%]'>Items</td>
              <td className='text-center'>Current Bids</td>
              <td className='text-center'>Time Left</td>
              <td className='text-center'>Bid Now</td>
            </tr>
          </thead>
          <tbody>
            {auctions.map((auction) => (
              <Auction
                key={auction.id}
                auction={auction}
                onFavorite={handleFavorite}
                isFavorited={clicked[auction.id]}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* Sidebar with Favorites */}
      <div className='w-1/4  bg-white  rounded-2xl p-4'>
        <h2 className='text-lg font-semibold mb-4 text-center border-b border-gray-100'><i class="fa-regular fa-heart"></i> Favorite Items</h2>
        {favorites.length === 0 ? (
          <h4 className=' text-center mb-8'><span className='text-xl font-bold'>No favorites yet</span> <p>Click the heart icon on any item to add it to your favorites</p></h4>
          
        ) : (
          <ul className='space-y-2'>
            {favorites.map((item) => (
              <li key={item.id} className='flex justify-between items-center bg-white p-2 rounded-2xl gap-2 border'>
                <img className='w-16 h-16 object-cover rounded border' src={item.image} alt="" />
                <div>
                  <span>{item.title}</span>
                  <h4>${item.currentBidPrice}</h4>
                  <h4>Bids:{item.bids}</h4>
                  </div>
                <button
                  onClick={() => handleRemove(item.id)}
                  className='text-red-600 hover:text-red-800'
                >
                  <i class="fa-solid fa-xmark"></i>
                </button>
              </li>
            ))}
          </ul>
        )}
        <div className='mt-4 pt-2 border-t border-gray-300 font-semibold flex justify-between'>
          Total Bids Amount: <div className='font-bold'>${total}</div>
        </div>
      </div>

      <ToastContainer position='top-right' autoClose={2000} />
    </div>
    </div>
    
  );
};

export default Auctions;
