// server/index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { registerUser, loginUser } = require('./controllers/authController.js'); // Update import
const transactionController = require('./routes/authRoutes.js'); // Add importrequire('dotenv').config();


const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

const mongoDBAtlasUri = process.env.MONGODB_URL
  
mongoose.connect(mongoDBAtlasUri, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
});

// Listen for the open event
mongoose.connection.once('open', () => {
  console.log('MongoDB connection successful');
});

// Listen for the error event
mongoose.connection.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

app.post('/register', registerUser);
app.post('/', loginUser);
app.use('/transaction', transactionController);

app.listen(PORT, function () {
  console.log('Server is running on port ' + PORT);
});
