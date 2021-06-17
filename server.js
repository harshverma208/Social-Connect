const express = require('express');
const connectDB = require('./config/db')

//Initialize Express for Backend
const app = express();

//Connect Database (MongoDB)
connectDB()

//Check if API is runnig using a HTTP get request
app.get('/', (req, res) => res.send('API Running'));

// Define Routes
app.use('/api/users', require('./routes/api/users'))
app.use('/api/profile', require('./routes/api/profile'))
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/posts', require('./routes/api/posts'))

//Port variable, 5000 for now, but on deployment it will use the PORT from env
const PORT = process.env.PORT || 5000;

//Connect server and log a message if connection was successful
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));