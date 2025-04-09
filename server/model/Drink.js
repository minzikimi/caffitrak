
import mongoose from "mongoose";

const drinkSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true,
        enum: ['Coffee', 'Tea', 'Energy Drink', 'Carbonated Drink']
    },
    size: {
        type: String,
        required: true,
        enum: ['S', 'M', 'L', 'half', 'full']
    },
    name: {
        type: String,
        required: true
    },
    caffeineContent: {
        type: Number,
        required: true
    }
},{
    timestamps : true,
    versionKey: false
});

const Drink = mongoose.model('Drink', drinkSchema);

export default Drink;
