import React from "react";
import "./App.css";

function App() {
  let books = [
  {
    id: 1,
    cover:
      "https://m.media-amazon.com/images/I/81TLiZrasVL._UF1000,1000_QL80_.jpg",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },
  {
    id: 2,
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS68RY84hFCFEv79YFlT9_dhetWuxhIO9Un6w&s",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    year: 1949,
    cover:
      "https://m.media-amazon.com/images/I/71kxa1-0mfL._UF1000,1000_QL80_.jpg",
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813,
    cover:
      "https://m.media-amazon.com/images/I/81OthjkJBuL._UF1000,1000_QL80_.jpg",
  },
  {
    id: 5,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937,
    cover:
      "https://m.media-amazon.com/images/I/91b0C2YNSrL._UF1000,1000_QL80_.jpg",
  },
  {
    id: 6,
    title: "Harry Potter and the Sorcerer",
    author: "J.K. Rowling",
    year: 1997,
    cover:
      "https://m.media-amazon.com/images/I/81YOuOGFCJL._UF1000,1000_QL80_.jpg",
  },
  {
    id: 7,
    title: "The Alchemist",
    author: "Paulo Coelho",
    year: 1988,
    cover:
      "https://m.media-amazon.com/images/I/71aFt4+OTOL._UF1000,1000_QL80_.jpg",
  },
  {
    id: 8,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
    cover:
      "https://m.media-amazon.com/images/I/71UwSHSZRnS._UF1000,1000_QL80_.jpg",
  },
  {
    id: 9,
    title: "The Da Vinci Code",
    author: "Dan Brown",
    year: 2003,
    cover:
"https://images.justwatch.com/poster/250531224/s718/the-da-vinci-code.jpg"  },
];


 let movies = [
  {
    id: 1,
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmkq35zEZtIgZWAHKWdGD_IRMUx-c9EOgrcQ&s",
  },
  {
    id: 2,
    title: "The Matrix",
    director: "Lana Wachowski, Lilly Wachowski",
    year: 1999,
    cover: "https://m.media-amazon.com/images/I/51EG732BV3L._AC_.jpg",
  },
  {
    id: 3,
    title: "Interstellar",
    director: "Christopher Nolan",
    year: 2014,
    cover:
      "https://m.media-amazon.com/images/I/91vIHsL-zjL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 4,
    title: "The Dark Knight",
    director: "Christopher Nolan",
    year: 2008,
    cover:
"https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg"  },
  {
    id: 5,
    title: "Titanic",
    director: "James Cameron",
    year: 1997,
    cover:
"https://upload.wikimedia.org/wikipedia/en/thumb/1/18/Titanic_%281997_film%29_poster.png/250px-Titanic_%281997_film%29_poster.png"  },
  {
    id: 6,
    title: "Avatar",
    director: "James Cameron",
    year: 2009,
    cover:
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_tMDmGpdUANiBhrYP30GLPrVvcNZed4sTeA&s"  },
  {
    id: 7,
    title: "Gladiator",
    director: "Ridley Scott",
    year: 2000,
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrURQw9D5TysFfJd5_VcPzC0NPy1DWqKQKQQ&s",
  },
  {
    id: 8,
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    year: 1994,
    cover:
      "https://m.media-amazon.com/images/I/51NiGlapXlL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 9,
    title: "Joker",
    director: "Todd Phillips",
    year: 2019,
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9vsaRuNKJdI-WK__LSvPZHS6peE7ne0878Q&s",
  },
];
let media = [...books, ...movies];

const next = () => {
  media.push(media.shift());
  books = media.filter(item => item.author);
  movies = media.filter(item => item.director);
}

  return (
  
    <div className="app">
      <h1>Books</h1>
      <div className="media-list">
        {books.map((book) => (
          <div key={book.id} className="media-item">
            <img src={book.cover} alt={book.title} className="media-cover" />
            <div className="media-info">
              <h2 className="media-title">{book.title}</h2>
              <h3 className="media-author">{book.author}</h3>
              <p className="media-year">{book.year}</p>
            </div>
         
          </div>
          
        ))}
      </div>

      <h1>Movies</h1>
      <div className="media-list">
        {movies.map((movie) => (
          <div key={movie.id} className="media-item">
            <img src={movie.cover} alt={movie.title} className="media-cover" />
            <div className="media-info">
              <h2 className="media-title">{movie.title}</h2>
              <h3 className="media-director">{movie.director}</h3>
              <p className="media-year">{movie.year}</p>
            </div>
          </div>
        ))}
      </div>
      
    </div>
);

}



export default App;
