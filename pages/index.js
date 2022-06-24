import React from "react";
import { client } from "../lib/client";
import { Product, FooterBanner, HeroBanner } from "../components";

export const Home = ({ products, bannerData }) => {
  
  return (
    <>
      <HeroBanner heroBanner={bannerData && bannerData[0]} />

      <div className="products-heading">
        <h2>Best Seling Products</h2>
        <p>electronics of many variations</p>
      </div>

      <div className="products-container">
        {products?.map((item) => (
          <Product key={item._id} products={item} />
        ))}
      </div>

      <FooterBanner footerBanner={bannerData && bannerData[0]}  />
    </>
  );
};



export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);


  return {
    props: { products, bannerData },
  };
};

export default Home;
