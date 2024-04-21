import express from "express"
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"
import path from "path"
import cors from "cors"
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express()

//middleware
app.use(cors());
app.use(express.json());


const PORT = 4001 || 4000;
const URI = "mongodb://localhost:27017/kitabe"

//Connect to mongoDB

try {
  mongoose.connect(URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log("Connected to mongoDB");
} catch (error) {
  console.log(error);
}

//defining routes
app.use("/book", bookRoute)
app.use("/user", userRoute)

//dep
app.get("/", (req, res) => {
  app.use(express.static(path.resolve(__dirname, "Frontend", "dist")));
  res.sendFile(path.resolve(__dirname, "Frontend", "dist", "index.html"));
  });

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})