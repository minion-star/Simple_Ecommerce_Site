import React from 'react';
// import link
import { Link } from 'react-router-dom';
// import icons
import { BsPlus, BsEyeFill} from 'react-icons/bs'
const Product = ({product}) => {
  console.log(product);
  // destructure product
  const {id, images, name, title, price} = product;
  return <div>
    <div className='border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition'>
    <div className='w-full h-full flex justify-center items-center'>{}
    <div className='w-[200px] mx-auto flex justify-center items-center '><img className='max-h-[160px] group-hover:scale-110 transition duration-300' src={images[0]} alt=''/></div>
    </div>
    </div>
  </div>;
};

export default Product;