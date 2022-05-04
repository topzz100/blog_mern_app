const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose');
const userRoute = require('./routes/users')
const authRoute = require('./routes/auths')
const postRoute = require('./routes/posts')
const categoryRoute = require('./routes/categories')
// const multer = require("multer");
const path = require("path");

const port = process.env.PORT || 7000

app.use(morgan('common'))
// app.use(morgan('tiny')) 
app.use(express.json());
// app.use("/images", express.static(path.join(__dirname, "/images")));


const connectDB = async(url) => {
  try{
    await mongoose.connect(url, () => {
      console.log('connected to DB')
    });

  }catch(err){
    console.log(err)
  }

}
connectDB(process.env.MONGO_URI)

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "images");
//   },
//   filename: (req, file, cb) => {
//     cb(null, req.body.name);
//   },
// });

// const upload = multer({ storage: storage });
// app.post("/api/upload", upload.single("file"), (req, res) => {
//   res.status(200).json("File has been uploaded");
// });

app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)
app.use('/api/posts', postRoute)
app.use('/api/categories', categoryRoute)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')))

  app.get('*', (req, res) =>
    res.sendFile(
      path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
    )
  )
} else {
  app.get('/', (req, res) => res.send('Please set to production'))
}



app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})