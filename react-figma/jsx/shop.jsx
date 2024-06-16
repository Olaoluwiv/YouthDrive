import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CloudinaryContext, Image, Transformation } from 'cloudinary-react';
import { cloudName, RangeImages } from "../cloud";

const Shop = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Shop</h1>
      {/* Method 1 to redirect user */}
      <Link to="/">Home</Link>
      {/* Method 2 to redirect user */}
      <button onClick={() => navigate('/')}>Home</button>

      <section className="browse-the-range">
        <h3>Browse The Range</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <CloudinaryContext cloudName={cloudName}>
          <div className="rangeImage">
            <Image publicId={RangeImages.banner}>
              <Transformation crop="scale" width="200" angle="10" />
            </Image>
            <Image publicId={RangeImages.buyNow}>
              <Transformation crop="scale" width="200" angle="10" />
            </Image>
            <Image publicId={RangeImages.dinning}>
              <Transformation crop="scale" width="200" angle="10" />
            </Image>
            <Image publicId={RangeImages.Living}>
              <Transformation crop="scale" width="200" angle="10" />
            </Image>
            <Image publicId={RangeImages.bedroom}>
              <Transformation crop="scale" width="200" angle="10" />
            </Image>
          </div>
        </CloudinaryContext>
      </section>
    </div>
  );
};

export default Shop;
