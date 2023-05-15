// import React, { useState, useEffect } from 'react';
// import moment from 'moment';
// import socketIOClient from 'socket.io-client';

// const ProductCard = ({ product }) => {
//   const [bids, setBids] = useState([]);
//   const [highestBid, setHighestBid] = useState(null);
//   const [remainingTime, setRemainingTime] = useState(
//     product.bidEndTime
//       ? moment.duration(moment().diff(product.bidEndTime)).asSeconds()
//       : null
//   );
  
//   // Connect to socket.io server
//   useEffect(() => {
//     const socket = socketIOClient('http://localhost:5000/');
//     socket.on('bidUpdate', (data) => {
//       if (data.productId === product._id) {
//         setBids((prevBids) => [...prevBids, data.bid]);
//       }
//     });
//     return () => socket.disconnect();
//   }, [product]);

// // Set up interval to update remaining time
// useEffect(() => {
//   const interval = setInterval(() => {
//     setRemainingTime(
//       product.bidEndTime &&
//         moment.duration(moment(product.bidEndTime).diff(moment())).asSeconds()
//     );
//   }, 1000);
//   return () => clearInterval(interval);
// }, [product]);


//   // Get all bids for the product
//   useEffect(() => {
//     (async () => {
//       const response = await fetch(`http://localhost:5000/products/${product._id}/bid`);
//       const data = await response.json();
//       setBids(data);
//     })();
//   }, [product._id]);

//   // Get highest bid
//   useEffect(() => {
//     setHighestBid(bids.reduce((prev, curr) => (prev.amount >= curr.amount ? prev : curr), { amount: 0 }));
//   }, [bids]);

//   // Place a bid on the product
//   const handleBidSubmit = async (event) => {
//     event.preventDefault();
//     const name = event.target.name.value.trim();
//     const email = event.target.email.value.trim();
//     const amount = event.target.amount.value.trim();

//     if (!name || !email || !amount) {
//       alert('Please fill in all fields');
//       return;
//     }

//     try {
//       const response = await fetch(`http://localhost:5000/products/${product._id}/bid`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ name, email, amount }),
//       });
//       const data = await response.text();
//       alert(data);
//     } catch (err) {
//       console.error(err);
//       alert('Failed to place bid');
//     }
//   };

//   return (
//     <div className='card'>
//       {/* <img src={product.image.url} alt={product.name} /> */}
//       <div className='card-body'>
//         <h5>{product.name}</h5>
//         <p>Price: ${product.price}</p>
//         <p>Quantity: {product.quantity}</p>
//         <p>Description: {product.description}</p>
//         <p>Bid start time: {moment(product.bidStartTime).format('YYYY-MM-DD HH:mm:ss')}</p>
//         {product.bidEndTime && (
//           <>
//             <p>Bid end time: {moment(product.bidEndTime).format('YYYY-MM-DD HH:mm:ss')}</p>
//             <p>Remaining time: {moment.duration(remainingTime, 'seconds').humanize()}</p>
//           </>
//         )}

//         {highestBid && highestBid.name && highestBid.email && highestBid.amount ? (
//           <p>Highest Bid: ${highestBid.amount} by {highestBid.name} ({highestBid.email})</p>
//         ) : (
//           <p>No bids yet</p>
//         )}

//         {product.bidEndTime && moment(product.bidEndTime).isAfter(moment()) ? (
//           <form onSubmit={handleBidSubmit}>
//             <h6>{product.name} Bid Form</h6>
// <div className='form-group'>
// <label htmlFor='name'>Name:</label>
// <input type='text' id='name' name='name' className='form-control' />
// </div>
// <div className='form-group'>
// <label htmlFor='email'>Email:</label>
// <input type='email' id='email' name='email' className='form-control' />
// </div>
// <div className='form-group'>
// <label htmlFor='amount'>Amount ($):</label>
// <input type='number' id='amount' name='amount' min={highestBid ? highestBid.amount + 1 : product.price} step='0.01' className='form-control' />
// </div>
// <button type='submit' className='btn btn-primary'>Place Bid</button>
// </form>
// ) : (
// <p>Bidding Closed</p>
// )}
// </div>
// </div>
// );
// };

// export default ProductCard;


import React, { useState, useEffect } from 'react';
import moment from 'moment';
import socketIOClient from 'socket.io-client';

const ProductCard = ({ product }) => {
  const [bids, setBids] = useState([]);
  const [highestBid, setHighestBid] = useState(null);
  const [remainingTime, setRemainingTime] = useState(
    product.bidEndTime
      ? moment.duration(moment().diff(product.bidEndTime))
      : null
  );
  const [newBidAmount, setNewBidAmount] = useState(
    highestBid ? highestBid.amount + 1 : product.price
  );
  const [bidderName, setBidderName] = useState('');
  const [bidderEmail, setBidderEmail] = useState('');

  // Connect to socket.io server
  useEffect(() => {
    const socket = socketIOClient('http://localhost:5000/');
    socket.on('bidUpdate', (data) => {
      if (data.productId === product._id) {
        setBids((prevBids) => [...prevBids, data.bid]);
      }
    });
    return () => socket.disconnect();
  }, [product]);

  // Set up interval to update remaining time
  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(
        product.bidEndTime &&
          moment.duration(moment(product.bidEndTime).diff(moment())).asSeconds()
      );
    }, 1000);
    return () => clearInterval(interval);
  }, [product]);

  // Get all bids for the product
  useEffect(() => {
    (async () => {
      const response = await fetch(`http://localhost:5000/products/${product._id}/bid`);
      const data = await response.json();
      setBids(data);
    })();
  }, [product._id]);

  // Get highest bid
  useEffect(() => {
    setHighestBid(bids.reduce((prev, curr) => (prev.amount >= curr.amount ? prev : curr), { amount: 0 }));
  }, [bids]);

  // Update new bid amount when input field changes
  const handleNewBidAmountChange = (event) => {
    setNewBidAmount(event.target.value);
  };

  // Place a bid on the product
  const handleBidSubmit = async (event) => {
    event.preventDefault();
    const name = bidderName.trim();
    const email = bidderEmail.trim();
    const amount = parseFloat(newBidAmount);

    if (!name || !email || isNaN(amount)) {
      alert('Please fill in all fields');
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/products/${product._id}/bid`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, amount }),
      });
      const data = await response.text();
      alert(data);
      setNewBidAmount(highestBid ? highestBid.amount + 1 : product.price);
      setBidderName('');
      setBidderEmail('');
    } catch (err) {
      console.error(err);
      alert('Failed to place bid');
    }
  };

  return (
    <div className="row">
    <div className='card mb-3 items'>
  
  <div className='card-body'>
  <img src={"https://i.postimg.cc/YS79Zp6B/pngegg.png"} alt={product.name} className='card-img-top' />
    <h4 className='card-title'>{product.name}</h4>
    <p className='card-text'>Price: ${product.price}</p>
    <p className='card-text'>Quantity: {product.quantity}</p>
    <p className='card-text'>Description: {product.description}</p>
    <p className='card-text'>Bid start time: {moment(product.bidStartTime).format('YYYY-MM-DD HH:mm:ss')}</p>

    {product.bidEndTime && (
      <>
        <p className='card-text'>Bid end time: {moment(product.bidEndTime).format('YYYY-MM-DD HH:mm:ss')}</p>
        <p className='card-text'>Remaining time: {moment.duration(remainingTime, 'seconds').humanize()}</p>
      </>
    )}

    {highestBid && highestBid.name && highestBid.email && highestBid.amount ? (
      <p className='card-text'>Highest Bid: ${highestBid.amount} by {highestBid.name} ({highestBid.email})</p>
    ) : (
      <p className='card-text'>No bids yet</p>
    )}

    {remainingTime > 0 && (
      <form onSubmit={handleBidSubmit}>
        <h6 className='card-subtitle mb-2 text-muted'>{product.name} Bid Form</h6>
        <div className='form-group'>
          <label htmlFor='bidderName'>Name: </label>
          <input
  type='text'
  className='form-control'
  id='bidderName'
  value={bidderName}
  onChange={(event) => {
    const regex = /^[a-zA-Z]*$/; // Regular expression for alphabets only
    if (regex.test(event.target.value)) {
      setBidderName(event.target.value);
    } else if (event.target.value === '') {
      setBidderName('');
    }
  }}
/>
        </div>
        <div className='form-group'>
          <label htmlFor='bidderEmail'>Email: </label>
          <input
            type='email'
            className='form-control'
            id='bidderEmail'
            value={bidderEmail}
            onChange={(event) => setBidderEmail(event.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='newBidAmount'>New Bid: </label>
          <input
            type='text'
            className='form-control'
            id='newBidAmount'
            value={newBidAmount}
            onChange={handleNewBidAmountChange}
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Place Bid
        </button>
      </form>
    )}

    {remainingTime <= 0 && highestBid && (
      <p className='card-text'>
        Auction ended. The winner is {highestBid.name} ({highestBid.email}) with a bid of ${highestBid.amount}.
      </p>
    )}
  </div>
</div>
</div>
);
};

export default ProductCard;