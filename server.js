const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware //
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Add routes, both API and view //
app.use(routes);

// Connect to the Mongo DB // 
mongoose.connect(
    process.env.MONGODB_CONNECTION_STRING || "mongodb://localhost/e-team",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    },
    (err) => {
        if (err) throw (err);
        console.log("MongoDB Connection Established")
    }
);

// Start the API server & listener // 
app.listen(PORT, function () {
    console.log(`Server now listening on PORT:${PORT}`);
});