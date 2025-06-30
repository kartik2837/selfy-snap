const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');

dotenv.config();

const authRoutes = require('./route/authRoute');
const productRoute = require('./route/productRoute');
const cartRoutes = require('./route/cart');
const orderRoutes = require('./route/order');
const adminRoutes = require('./route/admin');
const categoryRoutes = require("./route/categoryRoutes");
const uploadRoutes = require('./route/upload')


const app = express();

// ✅ Enable CORS for frontend origin
const allowedOrigins = [
  'http://localhost:5173',                 // local frontend
  'https://selfy-snap-1.onrender.com'      // deployed frontend
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('CORS not allowed for this origin: ' + origin));
    }
  },
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/upload', uploadRoutes);


// ✅ Serve static uploads folder
app.use(
    '/uploads',
    express.static(path.join(__dirname, 'uploads'), {
        setHeaders: (res) => {
            res.setHeader('Access-Control-Allow-Origin', '*'); // Allow access from any origin
        }
    })
);


// ✅ Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoute);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/categories', categoryRoutes);


const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('MongoDB is connected');
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch((err) => console.log(err));
