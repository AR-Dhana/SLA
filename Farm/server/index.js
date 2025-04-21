const express = require("express");
const cors = require("cors");
const path = require("path");
const uploadImg = require("./routes/imageRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('server/uploads')); // To serve images
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));




// Use routes
app.use('/api/users', userRoutes);
app.use("/api/images", uploadImg);



app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
