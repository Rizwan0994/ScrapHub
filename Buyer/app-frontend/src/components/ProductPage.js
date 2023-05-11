
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


import React from "react";
import { Link } from "react-router-dom";
import "./ProductPageStyle.css";

function ProductPage() {
  return (
    <>
      <section>
        <h1>Latest Scrap Product</h1>
        <div class="list">
          <div class="product">
            <img
              src="https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fcom.ft.imagepublish.upp-prod-eu.s3.amazonaws.com%2F67cb4d02-f8f4-11e8-8b7c-6fa24bd5409c?fit=scale-down&source=next&width=700"
              alt="img"
            />
            <div>
              <h2>SPEAKERS</h2>
              <p class="price">$24.99</p>
              <p class="descr">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              </p>
              <br />
              <Link to="/payment?name=SPEAKERS&price=24.99"><p>Buy Now</p></Link>
            </div>
          </div>
          <div class="product">
            <img
              class="se-item"
              src="http://sc04.alicdn.com/kf/H71d87876033e4478aa557047fc64ed39w.png"
              alt="img"
            />
            <div>
              <h2>HEADSET</h2>
              <p class="price">$34.99</p>
              <p class="descr">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              </p>
              <br />
              <Link to="/payment?name=HEADSET&price=34.99"><p>Buy Now</p></Link>
            </div>
          </div>
          <div class="product">
            <img
              class="item3"
              src="https://i0.wp.com/img.talkandroid.com/uploads/2020/08/Samsung_Galaxy_Buds_Live-1.png"
              alt="img"
            />
            <div>
              <h2>AIRBUDS</h2>
              <p class="price">$26.99</p>
              <p class="descr">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              </p>

              <br />
              <Link to="/payment?name=AIRBUDS&price=26.99"><p>Buy Now</p></Link>
            </div>
          </div>
          <div class="product">
            <img
              class="fo-item"
              src="https://cdn.shopify.com/s/files/1/2956/6186/products/101995916_805ca352-0030-4f61-8b1d-6edb20cd0bbb.png?v=1670237686"
              alt="img"
            />
            <div>
              <h2>B-SPEAKERS</h2>
              <p class="price">$49.99</p>
              <p class="descr">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              </p>
              <br />
              <Link to="/payment?name=B-SPEAKERS&price=49.99"><p>Buy Now</p></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductPage;
