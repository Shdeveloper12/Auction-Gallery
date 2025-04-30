import React from 'react';

const Banner = () => {
    return (
        
     <div
  className="hero min-h-screen "
  style={{
    backgroundImage: "url(https://i.ibb.co.com/23SSLZtZ/Banner-min.jpg)",
  }}>
  
  <div className=" text-neutral-content ">
    <div className="mr-180">
      <h1 className="mb-5 text-5xl font-bold">Bid on Unique Items from <br /> Around the World there</h1>
      <p className="mb-5">
      Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions
      </p>
      <button className="btn btn-primary">Explore Auctions</button>
    </div>
  </div>
</div>
       
    );
};

export default Banner;