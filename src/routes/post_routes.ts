import express from 'express'
const router = express.Router()
import Post from '../controllers/post'

router.get('/',Post.getAllPosts)

router.post('/',Post.createNewPost)

router.get('/:id',Post.getPostById)

export = router