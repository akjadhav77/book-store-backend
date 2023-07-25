const Book = require("../model/Book");

const getAllBooks = async (req, res, next) => {
  let books;
  try {
    books = await Book.find();
  } catch (error) {
    console.log(error);
  }

  if (!books) {
    return res.status(404).json({ message: "No products found!" });
  }
  return res.status(200).json({ books });
};

const getById = async (req, res, next) => {
  const id = req.params.id;
  let book;
  try {
    book = await Book.findById(id);
  } catch (error) {
    console.log(error);
  }
  if (!book) {
    return res.status(400).json({ message: "No book found!" });
  }
  return res.status(200).json({ book });
};

const addBooks = async (req, res, next) => {
  const { name, author, description, price, availability, image } = req.body;
  let book;
  try {
    book = new Book({
      name,
      author,
      description,
      price,
      availability,
      image
    });
    await book.save();
  } catch (error) {
    console.log(error);
  }

  if (!book) {
    return res.status(500).json({ message: "Unable to add" });
  }
  return res.status(201).json({ book });
};

const updateBook = async (req, res, next) => {
  const id = req.params.id;
  const { name, author, description, price, availability, image } = req.body;

  let book;
  try {
    book = await Book.findByIdAndUpdate(id, {
      name,
      author,
      description,
      price,
      availability,
      image
    });
    book = await book.save();
  } catch (error) {
    console.log(error);
  }

  if (!book) {
    return res.status(404).json({ message: "Unable to update!" });
  }
  return res.status(200).json({ book });
};

// delete book

const deleteBook = async (req, res, next) => {
  const id = req.params.id;

  let book;
  try {
    book = await Book.findByIdAndRemove(id);
  } catch (error) {
    console.log(error);
  }

  if (!book) {
    return res.status(404).json({ message: "Unable to delete!" });
  }
  return res.status(200).json({ message: 'Product Successfully Deleted!' });
};

exports.getAllBooks = getAllBooks;
exports.addBooks = addBooks;
exports.getById = getById;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook ;
