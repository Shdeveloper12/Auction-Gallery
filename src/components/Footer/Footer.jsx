import React from 'react';

const Footer = () => {
    return (

        <div className='text-center py-16'>
            <h3 className='text-2xl'><span className='text-blue-600'>Auction</span><span className='font-bold text-yellow-400'>Gallery</span></h3>
            <div className='flex justify-center gap-3 '><h4>Bid.</h4><h4>Win.</h4><h4>Won.</h4></div>
            <div className='flex justify-center gap-6 pt-2 '><h4>Home</h4><h4>Auctions</h4><h4>Categories</h4><h4>How to works</h4></div>
            <h5 className='py-2'>© 2025 AuctionHub. All rights reserved.</h5>
        </div>
    );
};

export default Footer;