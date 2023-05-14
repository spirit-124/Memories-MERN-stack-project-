export const getPost = async (req, res) => {
  try {
    const postMessage = await postMessage.find();
    console.log(postMessage);

    res.status(200), json(postMessage);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new postMessage(post);
  try {
    await newPost.save();
    res.status(201);
  } catch (error) {}
};
