// import React, { useState } from "react";
// import StripeCheckout from "react-stripe-checkout";

// function PaymentPage() {
//   const [orders, setOrders] = useState([]);
//   const [productName, setProductName] = useState("");
//   const [weight, setWeight] = useState("");

//   const calculatePrice = () => {
//     const totalPrice = orders.reduce((acc, curr) => acc + curr.price, 0);
//     return totalPrice.toFixed(2);
//   };

//   const handleAddOrder = () => {
//     const price = weight * 0.5;
//     setOrders([...orders, { productName, weight, price }]);
//     setProductName("");
//     setWeight("");
//   };

//   const handleStripeToken = async (token) => {
//     try {
//       const response = await fetch("http://localhost:5000/api/payment", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//           id: token.id,
//           amount: parseInt(parseFloat(calculatePrice()) * 100), // convert to cents
//           orders: orders
//         })
//       });

//       const data = await response.json();
//       alert(data.message);
//       setOrders([]);
//     } catch (err) {
//       console.log(err);
//       alert("Payment failed");
//     }
//   };

//   return (
//     <div className="App">
//       <h1>Orders</h1>
//       <div>
//         <label htmlFor="product-name">Product name:</label>
//         <input
//           type="text"
//           id="product-name"
//           value={productName}
//           onChange={(e) => setProductName(e.target.value)}
//         />
//       </div>
//       <div>
//         <label htmlFor="weight">Weight:</label>
//         <input
//           type="number"
//           id="weight"
//           value={weight}
//           onChange={(e) => setWeight(e.target.value)}
//         />
//       </div>
//       <button onClick={handleAddOrder}>Add Order</button>
//       <div className="orders">
//         {orders.map((order, index) => (
//           <div key={index}>
//             <p>Product Name: {order.productName}</p>
//             <p>Weight: {order.weight}</p>
//             <p>Price: {order.price}</p>
//           </div>
//         ))}
//         {orders.length > 0 && (
//           <div className="total-price">
//             <p>Total price: {calculatePrice()}</p>
//           </div>
//         )}
//       </div>
//       {orders.length > 0 && (
//         <StripeCheckout
//           stripeKey="pk_test_51Muy0GHaLC1wsFOqorxn0RwhJjTHSN3c0w3PoHcbCYxBvK7QFw1IjYPdD6bR3DCItDcedt6WIlPmpiQa7Q6CWD1e00oYFh4MMi"
//           token={handleStripeToken}
//           amount={parseFloat(calculatePrice()) * 100} // convert to cents
//           name="Orders Payment"
//           billingAddress
//           shippingAddress
//         />
//       )}
//     </div>
//   );
// }

// export default  PaymentPage;

import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import "./PaymentPageStyle.css";
function PaymentPage() {
  const location = useLocation();
  const [orders, setOrders] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // Retrieve query parameters from URL
  const queryParams = new URLSearchParams(location.search);
  const productNameFromUrl = queryParams.get('name');
  const productPriceFromUrl = parseFloat(queryParams.get('price'));

  const handleAddOrder = () => {
    const order = {
      productName: productNameFromUrl,
      weight: 1,
      price: productPriceFromUrl,
    };
    setOrders([...orders, order]);
    setTotalPrice(totalPrice + productPriceFromUrl);
  };

  const handleToken = async (token) => {
    try {
      const response = await fetch('http://localhost:5000/api/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: token.id,
          amount: totalPrice.toFixed(2) * 100, // convert to cents
          orders: orders,
        }),
      });
      const data = await response.json();
      alert(data.message);
      setOrders([]);
      setTotalPrice(0);
    } catch (err) {
      console.log(err);
      alert('Payment failed');
    }
  };

  return (
    <div className="payment-page">
      <h1>Orders</h1>
      <div className="product-info">
        <div className="product-name">
          <label htmlFor="productName">Product name:</label>
          <input type="text" id="productName" value={productNameFromUrl} readOnly />
        </div>
        <br></br>
        <div className="product-price">
          <label htmlFor="price">Product Price:</label>
          <input type="text" id="price" value={`$${productPriceFromUrl.toFixed(2)}`} readOnly />
        </div>
      </div>
      <button onClick={handleAddOrder}>Add Order</button>
      {orders.length > 0 && (
        <div className="order-list">
          <h2>Order List</h2>
          <ul>
            {orders.map((order, index) => (
              <li key={index}>
                <span>{order.productName}</span> <span>{`$${order.price.toFixed(2)}`}</span>
              </li>
            ))}
          </ul>
          <div className="total-price">
            <strong>Total Price:</strong> <span>{`$${totalPrice.toFixed(2)}`}</span>
          </div>
          <StripeCheckout
            stripeKey="pk_test_51Muy0GHaLC1wsFOqorxn0RwhJjTHSN3c0w3PoHcbCYxBvK7QFw1IjYPdD6bR3DCItDcedt6WIlPmpiQa7Q6CWD1e00oYFh4MMi"
            token={handleToken}
            amount={totalPrice.toFixed(2) * 100} // convert to cents
            name="Orders Payment"
            billingAddress
            shippingAddress
          />
        </div>
      )}
    </div>
  );
}

export default PaymentPage;
