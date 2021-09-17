const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/items');


const items = mongoose.model('item', 
{ 
    name: String,
    description: String,
    year: Date, 
    photo: String,
    initial_price: Number,
    actual_price: Number,
    max_date: Date,
    status: Boolean,
    bidder: String,
    owner: {
        name: String,
        email: String,
        
        }
});