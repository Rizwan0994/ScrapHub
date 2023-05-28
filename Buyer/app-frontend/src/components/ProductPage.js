
// import React from "react";
// import "./ProductPageStyle.css";
// function ProductPage(){
//     return (
//         <>
//         <section>
//         <h1>Latest Scrap Product</h1>
//         <div class="list">
//           <div class="product">
//             <img
//               src="https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fcom.ft.imagepublish.upp-prod-eu.s3.amazonaws.com%2F67cb4d02-f8f4-11e8-8b7c-6fa24bd5409c?fit=scale-down&source=next&width=700"
//               alt="img"/>
//             <div>
//               <h2>SPEAKERS</h2>
//               <p class="price">$74.99</p>
//               <p class="descr">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//                 eiusmod tempor
//               </p>
//               <br />
//               <a href={() => false}><p>Add to cart</p></a>
//             </div>
//           </div>
//           <div class="product">
//             <img
//               class="se-item"
//               src="http://sc04.alicdn.com/kf/H71d87876033e4478aa557047fc64ed39w.png"
//               alt="img" />
//             <div>
//               <h2>HEADSET</h2>
//               <p class="price">$34.99</p>
//               <p class="descr">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//                 eiusmod tempor
//               </p>
//               <br />
//               <a href={() => false}><p>Add to cart</p></a>
//             </div>
//           </div>
//           <div class="product">
//             <img
//               class="item3"
//               src="https://i0.wp.com/img.talkandroid.com/uploads/2020/08/Samsung_Galaxy_Buds_Live-1.png"
//               alt="img" />
//             <div>
//               <h2>AIRBUDS</h2>
//               <p class="price">$26.99</p>
//               <p class="descr">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//                 eiusmod tempor
//               </p>
  
//               <br />
//               <a href={() => false}><p>Add to cart</p></a>
//             </div>
//           </div>
//           <div class="product">
//             <img
//               class="fo-item"
//               src="https://cdn.shopify.com/s/files/1/2956/6186/products/101995916_805ca352-0030-4f61-8b1d-6edb20cd0bbb.png?v=1670237686"
//             alt="img"/>
//             <div>
//               <h2>B-SPEAKERS</h2>
//               <p class="price">$49.99</p>
//               <p class="descr">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//                 eiusmod tempor
//               </p>
//               <br />
//               <a href={() => false}><p>Add to cart</p></a>
//             </div>
//           </div>
//         </div>
//       </section>
//         </>
//     )}

// export default  ProductPage;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ProductPageStyle.css";

function ProductPage() {
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('https://apitestregs.onrender.com/api/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
        // Handle the error, e.g., show an error message or retry the request
      }
    }

    fetchProducts();
  }, []);

  const handleProductSelect = (productId) => {
    if (selectedProducts.includes(productId)) {
      setSelectedProducts(selectedProducts.filter((id) => id !== productId));
    } else {
      setSelectedProducts([...selectedProducts, productId]);
    }
  };

  const handleBuySelected = () => {
    const selectedProductsData = products.filter((product) =>
      selectedProducts.includes(product._id)
    );
    setSelectedProducts([]);
    window.localStorage.setItem(
      "selectedProducts",
      JSON.stringify(selectedProductsData)
    );
  };
  const divStyle = {
   display:'flex',
    color: '#1f2d3d',
    padding: '10px',
    borderRadius: '5px',
  };

  return (
    <>
      <section className="product-page">
        <h1 style={divStyle }>Available Scrap Product</h1>
        <div className="list">
          {products.map((product) => (
            <div className="product" key={product._id}>
              {/* <img src={"https://i.postimg.cc/mZ8C1Sb3/pngegg.png"} alt={"product.name"} /> */}
              <h2>{product.name}</h2>
              <div>
                <h2>{product.name}</h2>
                <p className="price">${product.price.toFixed(2)}</p>
                <p className="descr">{product.description}</p>
                <br />
                <Link
                  to={`/payment?name=${product.name}&price=${product.price}`}
                  onClick={() => handleProductSelect(product._id)}
                >
                  <p>Buy Now</p>
                </Link>
                <input
                  type="checkbox"
                  checked={selectedProducts.includes(product._id)}
                  onChange={() => handleProductSelect(product._id)}
                />
              </div>
            </div>
          ))}
        </div>
        {selectedProducts.length > 0 && (
          <button onClick={handleBuySelected}>Buy Selected</button>
        )}
      </section>
      <a href="/feedback">Wanna give feedback about our services?</a>
    </>
  );
}

export default ProductPage;