const express = require('express');

const path = require('path');
const cors = require('cors');
const app = express();
const connectDB = require('./config/db');

connectDB();
// Connect Database

const corsOptions = {
  origin: function (origin, callback) {
    // if (!origin || whitelist.indexOf(origin) !== -1) {
    callback(null, true);
    // } else {
    //   callback(new Error("Not allowed by CORS"))
    // }
  },
  credentials: true
};
app.use(cors(corsOptions));

// Init Middleware
app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(express.json());

app.use('/api/v2/users', require('./routes/api/users'));
app.use('/api/v2/auth', require('./routes/api/auth'));
app.use('/api/v2/profile', require('./routes/api/profile'));
app.use('/api/v2/titles', require('./routes/api/titles'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
