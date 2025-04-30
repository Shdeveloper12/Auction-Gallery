import React from 'react';

const Navber = () => {
    return (
        <div>
           <div className="navbar px-12 shadow-sm">
  <div className="navbar-start">
    <h3 className='text-2xl'><span className='text-blue-600'>Auction</span><span className='font-bold text-yellow-400'>Gallery</span></h3>
  </div>
  <div className="navbar-center">
    <a className="btn btn-ghost text-xl">Home</a>
    <a className="btn btn-ghost text-xl">Auctions</a>
    <a className="btn btn-ghost text-xl">Categories</a>
    <a className="btn btn-ghost text-xl">How to works</a>
  </div>
  <div className="navbar-end">
    
    <button className="btn btn-ghost btn-circle">
      <div className="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /> </svg>
        <span className="badge badge-xs badge-primary indicator-item"></span>
      </div>
    </button>
    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
  </div>
</div> 
        </div>
    );
};

export default Navber;