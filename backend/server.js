const express = require("express");
const Razorpay = require("razorpay");
const cors = require("cors");
const crypto = require("crypto");
require("dotenv").config();
const path = require("path");

const app = express();


app.use(express.static(path.join(__dirname, 'public')));

// Use CORS middleware
app.use(
  cors({
    origin: '*',
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Import and configure database (Ensure this is correctly set up)
const dbConfig = require("./config/dbConfig");

// Import routes
const portfolioRoute = require("./routes/portfolioRoute");

// Use middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Use routes
app.use("/api/portfolio", portfolioRoute);

// Basic route to check server status
app.get("/", (req, res) => {
  res.send("Server is running");
});

// Route to create an order
app.post("/order", async (req, res) => {
  try {
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    if (!req.body) {
      return res.status(400).send("Bad Request: No request body found");
    }

    const options = req.body;
    const order = await razorpay.orders.create(options);

    if (!order) {
      return res.status(400).send("Bad Request: Order creation failed");
    }

    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// Route to validate a transaction
app.post("/validate", (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;

  const sha = crypto.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET);
  sha.update(`${razorpay_order_id}|${razorpay_payment_id}`);
  const digest = sha.digest("hex");

  if (digest !== razorpay_signature) {
    return res.status(400).json({ msg: "Transaction is not legit" });
  }

  res.json({
    msg: "Transaction is legit",
    orderId: razorpay_order_id,
    paymentId: razorpay_payment_id,
  });
});

// Serve static files from the React app


// Start the server
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
