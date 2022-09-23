import { useState, useEffect } from "react";
import "./Books.css";
import Search from "./Search";

const getData = async () => {
  try {
    let res = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${"Batman"}`
    );

    let data = await res.json();
    return data.items;
  } catch (error) {
    console.log(error);
  }
};

// [0].volumeInfo.title

function Book() {
  const [books, setBooks] = useState([]);
  // const [data, setData] = useState();

  useEffect(() => {
    fetchAndUpdateData();
  }, []);

  const fetchAndUpdateData = async () => {
    try {
      const data = await getData();
      // console.log(data);

      setBooks(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div id="book_cards">
      <Search />
      <br />
      {books.map((items) => (
        <div id="book_card">
          <div id="image_container">
            <img
              src={items.volumeInfo.imageLinks.smallThumbnail}
              alt={items.volumeInfo.title + ".img"}
            />
          </div>
          <div id="authors_container">
            <h5>
              {items.volumeInfo.authors.map((author) => (
                <div>{author}</div>
              ))}
            </h5>
          </div>
          <div id="title_container">
            <h3>{items.volumeInfo.title}</h3>
          </div>
          <div id="Book_container">
            <button>ADD</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Book;
