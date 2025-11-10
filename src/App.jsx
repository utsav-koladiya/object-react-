import React from "react";
import "./App.css";

function App() {
  let books = [
    {
      id: 1,
      type: "book",
      cover:
        "https://m.media-amazon.com/images/I/81TLiZrasVL._UF1000,1000_QL80_.jpg",
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925,
    },
    {
      id: 2,
      type: "book",
      cover:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS68RY84hFCFEv79YFlT9_dhetWuxhIO9Un6w&s",
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960,
    },
    {
      id: 3,
      type: "book",
      title: "1984",
      author: "George Orwell",
      year: 1949,
      cover:
        "https://m.media-amazon.com/images/I/71kxa1-0mfL._UF1000,1000_QL80_.jpg",
    },
    {
      id: 4,
      type: "book",
      title: "Pride and Prejudice",
      author: "Jane Austen",
      year: 1813,
      cover:
        "https://m.media-amazon.com/images/I/81OthjkJBuL._UF1000,1000_QL80_.jpg",
    },
    {
      id: 5,
      type: "book",
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      year: 1937,
      cover:
        "https://m.media-amazon.com/images/I/91b0C2YNSrL._UF1000,1000_QL80_.jpg",
    },
    {
      id: 6,
      type: "book",
      title: "Harry Potter and the Sorcerer",
      author: "J.K. Rowling",
      year: 1997,
      cover:
        "https://m.media-amazon.com/images/I/81YOuOGFCJL._UF1000,1000_QL80_.jpg",
    },
    {
      id: 7,
      type: "book",
      title: "The Alchemist",
      author: "Paulo Coelho",
      year: 1988,
      cover:
        "https://m.media-amazon.com/images/I/71aFt4+OTOL._UF1000,1000_QL80_.jpg",
    },
    {
      id: 8,
      type: "book",
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      year: 1951,
      cover:
        "https://m.media-amazon.com/images/I/71UwSHSZRnS._UF1000,1000_QL80_.jpg",
    },
    {
      id: 9,
      type: "book",
      title: "The Da Vinci Code",
      author: "Dan Brown",
      year: 2003,
      cover:
        "https://images.justwatch.com/poster/250531224/s718/the-da-vinci-code.jpg",
    },
  ];

  let movies = [
    {
      id: 10,
      type: "movie",
      title: "Inception",
      director: "Christopher Nolan",
      year: 2010,
      cover:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmkq35zEZtIgZWAHKWdGD_IRMUx-c9EOgrcQ&s",
    },
    {
      id: 11,
      type: "movie",
      title: "The Matrix",
      director: "Lana Wachowski, Lilly Wachowski",
      year: 1999,
      cover: "https://m.media-amazon.com/images/I/51EG732BV3L._AC_.jpg",
    },
    {
      id: 12,
      type: "movie",
      title: "Interstellar",
      director: "Christopher Nolan",
      year: 2014,
      cover:
        "https://m.media-amazon.com/images/I/91vIHsL-zjL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 13,
      type: "movie",
      title: "The Dark Knight",
      director: "Christopher Nolan",
      year: 2008,
      cover:
        "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg",
    },
    {
      id: 14,
      type: "movie",
      title: "Titanic",
      director: "James Cameron",
      year: 1997,
      cover:
        "https://upload.wikimedia.org/wikipedia/en/thumb/1/18/Titanic_%281997_film%29_poster.png/250px-Titanic_%281997_film%29_poster.png",
    },
    {
      id: 15,
      type: "movie",
      title: "Avatar",
      director: "James Cameron",
      year: 2009,
      cover:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_tMDmGpdUANiBhrYP30GLPrVvcNZed4sTeA&s",
    },
    {
      id: 16,
      type: "movie",
      title: "Gladiator",
      director: "Ridley Scott",
      year: 2000,
      cover:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrURQw9D5TysFfJd5_VcPzC0NPy1DWqKQKQQ&s",
    },
    {
      id: 17,
      type: "movie",
      title: "The Shawshank Redemption",
      director: "Frank Darabont",
      year: 1994,
      cover:
        "https://m.media-amazon.com/images/I/51NiGlapXlL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 18,
      type: "movie",
      title: "Joker",
      director: "Todd Phillips",
      year: 2019,
      cover:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9vsaRuNKJdI-WK__LSvPZHS6peE7ne0878Q&s",
    },
  ];

  let media = [...books, ...movies];
  let abooks = media.filter((item) => item.type === "book");
  let amovies = media.filter((item) => item.type === "movie");

  return (
    <div className="app">
      <h1>Books</h1>
      <div className="media-list">
        {abooks.map((item) => (
          <div key={item.id} className="media-item">
            <img src={item.cover} alt={item.title} className="media-cover" />
            <div className="media-info">
              <h2>{item.title}</h2>
              <h3>{item.author}</h3>
              <p>{item.year}</p>
            </div>
          </div>
        ))}
      </div>

      <h1>Movies</h1>
      <div className="media-list">
        {amovies.map((item) => (
          <div key={item.id} className="media-item">
            <img src={item.cover} alt={item.title} className="media-cover" />
            <div className="media-info">
              <h2>{item.title}</h2>
              <h3>{item.director}</h3>
              <p>{item.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
