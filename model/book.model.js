import mongoose from "mongoose";

const kitabeSchema = mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    image:String,
    title:String
})

const Book = mongoose.model("Kitabe", kitabeSchema);
export default Book;