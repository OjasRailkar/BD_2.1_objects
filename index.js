const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.static('static'));
let book = {
  title: 'The God of Small Things',
  author: 'Arundhatti Roy',
  publicationYear: 1997,
  genre: 'Novel',
  isAvailable: true,
  stock: 5,
};

app.get('/book', (req, res) => {
  res.json(book);
});

//2

function getFulltitleAndAutor(book) {
  return book.title + ' by' + book.author;
}

app.get('/book/fulltitle-author', (req, res) => {
  let fulltitleAndAuthor = getFulltitleAndAutor(book);
  res.json({ fulltitleAndAuthor: fulltitleAndAuthor });
});

//3

function getGenreAndAvailibilty(book) {
  return {
    genre: book.genre,
    availability: book.isAvailable,
  };
}

app.get('/book/genre-availability', (req, res) => {
  let genreAndAvailabilty = getGenreAndAvailibilty(book);
  res.json(genreAndAvailabilty);
});

//4

function calculateBookAge(book) {
  return {
    age: 2024 - book.publicationYear,
  };
}

app.get('/book/age', (req, res) => {
  let bookAge = calculateBookAge(book);
  res.json(bookAge);
});

//5

function getBookSummary(book) {
  let bookSummary =
    'Title: ' +
    book.title +
    ', Author: ' +
    book.author +
    ', Genre: ' +
    book.genre +
    ', Published: ' +
    book.publicationYear;
  return bookSummary;
}

app.get('/book/summary', (req, res) => {
  let bookSummary = getBookSummary(book);
  res.json({ summary: bookSummary });
});

//6
function checkStockAndOrder(book) {
  if (book.stock > 0) {
    return { status: 'In Stock', stock: book.stock };
  } else {
    return { status: 'Out of Stock', message: 'Order Required' };
  }
}

app.get('/book/stock-status', (req, res) => {
  let stockStatus = checkStockAndOrder(book);
  res.json(stockStatus);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
