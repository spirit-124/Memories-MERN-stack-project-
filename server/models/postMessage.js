import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  tittle: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFiles: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    Data: new Date(),
  },
});

const postMessage = mongoose.model("postMessage", postSchema);

export default postMessage;
