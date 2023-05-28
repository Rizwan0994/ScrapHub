const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const stripe = require("stripe")("sk_test_51Muy0GHaLC1wsFOq7ivBQ5PyLAdWpyhni8BrGDhgKUE3QSmrmaZZ00JdApKQESUcoaiH0YC9kzGFJRb1V0Adq09m004ESmaVsd");

const Order = require("./Order");
const Product=require("./Product")

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb+srv://rizwan:rizwan123@cluster0.em5bh.mongodb.net/scrapHub_db?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.log(err));

const handlePayment = async (req, res) => {
  try {
    const { id, amount, orders } = req.body;

    // Parse orders array from JSON string
    const parsedOrders = JSON.parse(orders);
    
    if (!parsedOrders || parsedOrders.length === 0 || parsedOrders.some(order => !order.price || !order.weight || !order.productName)) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "usd",
      description: "Orders Payment",
      payment_method_types: ['card'],
      payment_method_data: {
        type: 'card',
        card: {
          token: id
        }
      },
      confirm: true
    });

    console.log(paymentIntent);
     //console.log(orders)
    // Save order details to database
    const orderDocs = await Order.insertMany(parsedOrders);
// Remove ordered products from database
    const productNames = parsedOrders.map(order => order.productName);
    await Product.deleteMany({ name: { $in: productNames } });

    res.json({ message: "Payment successful" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Payment failed" });
  }
};

app.post("/api/payment", handlePayment);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
