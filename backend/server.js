const express = require('express');
const connectDB = require('./config/db');
const riderRoutes = require('./routes/riderRoutes');
const autoDriverRoutes = require('./routes/autoDriverRoutes');
const dotenv = require('dotenv');

dotenv.config();
connectDB 
const app = express();
app.use(express.json());

app.use('/api/riders', riderRoutes);
app.use('/api/drivers', autoDriverRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});