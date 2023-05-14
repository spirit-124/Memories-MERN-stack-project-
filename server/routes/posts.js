import express from "express";
import { getPost, createPost } from "../controllers/posts.js";

const router = express.Router();

// Can be checked at https://localhost:3000/posts
router.get("/", getPost);
router.post("/", createPost);

export default router;
