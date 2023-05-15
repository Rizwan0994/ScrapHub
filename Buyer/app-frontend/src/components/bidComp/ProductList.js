// import React, { useState, useEffect } from 'react';
// import ProductCard from './ProductCard';

// const ProductList = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     (async () => {
//       const response = await fetch('http://localhost:5000/products');
//       const data = await response.json();
//       setProducts(data);
//     })();
//   }, []);

//   return (
//     <div className='row'>
//       {products.map((product) => (
//         <div key={product._id} className='col-md-4 my-3'>
//           <ProductCard product={product} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProductList;


import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import socketIOClient from 'socket.io-client';
// import '../bidComp/style.css';

const ProductList = () => {
const [products, setProducts] = useState([]);

useEffect(() => {
(async () => {
const response = await fetch('http://localhost:5000/products');
const data = await response.json();
setProducts(data);
})();
}, []);

useEffect(() => {
  const socket = socketIOClient('http://localhost:5000/');
  socket.on('bidUpdate', (data) => {
    const updatedProducts = products.map((product) => {
      if (product._id === data.productId) {
        const bids = Array.isArray(product.bids) ? product.bids : [];
        return { ...product, bids: [...bids, data.bid] };
      }
      return product;
    });
    setProducts(updatedProducts);
  });
  return () => socket.disconnect();
}, [products]);

return (
<div className='row'>
<h2 className='sec-head'>Scrap Product Bidding Page</h2>
{products.map((product) => (
<div key={product._id} className='col-md-4 my-3'>
<ProductCard product={product} />
</div>
))}
</div>
);
};

export default ProductList;