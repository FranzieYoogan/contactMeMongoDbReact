const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const router = require('./routes/contacts.route');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
.then(() => {

    console.log('DB Connected');
    app.use(router);

})
.catch((err) => {

    console.log(err);

})

const PORT = process.env.PORT || 3000;

app.listen(PORT,() => {

    console.log(`Server is running at ${PORT}`);

})