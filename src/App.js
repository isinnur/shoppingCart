import { useState } from 'react';
import './App.css';
import BooksList from './components/BooksList';

function App() {
  const list = [
    {
      id: 1,
      title: "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
      author: "James Clear",
      price: 13,
      url: "https://images-na.ssl-images-amazon.com/images/I/81bGKUa1e0L._AC_UL254_SR254,254_.jpg"
    },

    {
      id: 2,
      title: "The Housemaid ",
      author: " Freida McFadden",
      price: 6,
      url: "https://images-na.ssl-images-amazon.com/images/I/81WduXjuKwL._AC_UL127_SR127,127_.jpg"
    },

    {
      id: 3,
      title: "Baking Yesteryear: The Best Recipes from the 1900s to the 1980s",
      author: " B. Dylan Hollis ",
      price: 20,
      url: "https://images-na.ssl-images-amazon.com/images/I/81o-PyNHxbL._AC_UL127_SR127,127_.jpg"
    },

    {
      id: 4,
      title: "It Starts with Us: A Novel (2) (It Ends with Us)",
      author: "Colleen Hoover ",
      price: 9,
      url: "https://images-na.ssl-images-amazon.com/images/I/71PNGYHykrL._AC_UL127_SR127,127_.jpg"
    },

    {
      id: 5,
      title: "Of Light and Shadow: A Fantasy Romance Novel Inspired by Indian Mythology",
      author: "Tanaz Bhathena",
      price: 15,
      url: "https://images-na.ssl-images-amazon.com/images/I/41OInGgKzhL._AC_SX184_.jpg"
    },

    {
      id: 6,
      title: "Milk and Honey ",
      author: "Rupi Kaur",
      price: 7,
      url: "https://images-na.ssl-images-amazon.com/images/I/41J43ERHtLL._AC_SX184_.jpg"
    },

    {
      id: 7,
      title: "A Flicker in the Dark: A Novel",
      author: "Stacy Willingham ",
      price: 13,
      url: "https://images-na.ssl-images-amazon.com/images/I/51Pfj0VRR8L._AC_SX184_.jpg"
    },

    {
      id: 8,
      title: "Why Am I So Anxious?: Powerful Tools for Recognizing Anxiety and Restoring Your Peace",
      author: "Tracey Marks ",
      price: 6,
      url: "https://images-na.ssl-images-amazon.com/images/I/41ClVd1BuKL._AC_SX184_.jpg"
    },

    {
      id: 9,
      title: "The Midcoast: A Novel",
      author: "Adam White",
      price: 18,
      url: "https://images-na.ssl-images-amazon.com/images/I/41UelbLE6NL._AC_SX184_.jpg"
    },

    {
      id: 10,
      title: "Miles Morales Suspended: A Spider-Man Nove",
      author: "Jason Reynolds",
      price: 22,
      url: "https://images-na.ssl-images-amazon.com/images/I/51orCUhbfuL._AC_SX184_.jpg"
    },
  ]

  //kitapların listesi
  const [bookList, setBookList] = useState(list);

  return (
    <>
      <BooksList books={bookList} />
    </>
  );
}

export default App;
