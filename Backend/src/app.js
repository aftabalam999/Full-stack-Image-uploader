const express = require("express");
const multer = require("multer");
const uploadFile = require("./services/storage.service");
const postModel = require("./models/post.model");
const cors = require("cors");

const app = express();
const upload = multer({ storage: multer.memoryStorage() }); // used this for storing the file in memory, you can also configure it to store on disk or other storage services like AWS S3, Google Cloud Storage, etc.

app.use(cors());
app.use(express.json());

app.post("/create-post", upload.single("image"), async (req, res) => {
  // console.log(req.body);
  // console.log(req.file);
  const result = await uploadFile(req.file.buffer);

  const post = await postModel.create({
    image: result.url,
    caption: req.body.caption,
  });
  res.status(201).json({
    message: "Post created successfully",
    post,
  });
});

app.get('/posts', async (req,res)=>{
  const posts = await postModel.find();
  res.status(200).json({
    message: "Posts fetched successfully",
    posts,
  });
})

module.exports = app;
