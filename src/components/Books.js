import React, { useState } from 'react';

export function BookForm(props) {
    const [searchQuery, setSearchQuery] = useState("");
    const [displayResults, setDisplayResults] = useState(false);
    const [books, setBooks] = useState([]);

    function handleSubmit(event) {
        event.preventDefault();
        setDisplayResults(true);
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`)
            .then(response => response.json())
            .then(data => {
                setBooks(data.items);
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <div className="book-container">
            <form className="book-form" onSubmit={handleSubmit}>
                <input value={searchQuery} onChange={e => setSearchQuery(e.target.value)} type="text" id="search" name="search" />
                <button id="book-button" type="submit">Search</button>
            </form>
            {displayResults && <BookResults books={books} />}
        </div>
    );
}

export function BookResults({ books }) {
    return (
        <div className="book-results">
            {books.map((book) => (
                <div key={book.id} className="book">
                    <h2>{book.volumeInfo.title}</h2>
                    <h3>{book.volumeInfo.authors}</h3>
                    <p>{book.volumeInfo.description}</p>
                    {book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail && (
                        <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
                    )}
                </div>
            ))}
        </div>
    );
}