import React, {createContext, useState, useEffect} from 'react';



export const ProductContext = createContext();
const ProductProvider = ({children}) => {
  //products state
  const [products, setProducts] = useState([]);
  //fetch products
  useEffect(()=>{
    const fetchProducts = async()=> {
      const response = await fetch('https://api.escuelajs.co/api/v1/products');
      const data = await response.json();
      console.log(data);
      setProducts(data);
    };
    fetchProducts();
  }, []); 
  return <ProductContext.Provider value={{products}}>{children}</ProductContext.Provider>;
};

export default ProductProvider;