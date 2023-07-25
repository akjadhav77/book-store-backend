const express = require("express")
const router = express.Router()
const Book = require('../model/Book.js')
const booksController = require('../controllers/bookcontroller.js')

router.get("/", booksController.getAllBooks);
router.post("/", booksController.addBooks);
router.get("/:id", booksController.getById)
router.put("/:id", booksController.updateBook)
router.delete("/:id", booksController.deleteBook)

module.exports = router;