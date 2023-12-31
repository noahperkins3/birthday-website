
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


export function JournalForm({ onSubmit, handleDelete, posts }) {
    let date = new Date();
    let currDate = date.toLocaleDateString();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);
    const entryDate = currDate;

    function handleSubmit(e) {
        e.preventDefault();
        setFormSubmitted(true);

        const newPost = {
            title,
            content,
            entryDate
        }

        onSubmit(newPost);
        setTitle('');
        setContent('');

    }

    return (
        <div className="journal-container">
            <h2 id="curr-date">{currDate}</h2>
            <button id="view-entries"><NavLink to="/past-entries">View Past Entries</NavLink></button>
            <form onSubmit={handleSubmit} className="journal-form">
                <label htmlFor="title">title</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label htmlFor="content">content</label>
                <textarea
                    id="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                />
                <button type="submit" onClick={handleSubmit}><NavLink to="/past-entries">
                    Post</NavLink></button>
            </form>
            {formSubmitted && <PastEntries posts={posts} handleDelete={handleDelete} />}
        </div>
    )
}

export function PastEntries({ handleDelete, posts }) {
    let date = new Date();
    let currDate = date.toLocaleDateString();

    return (
        <div className="past-entries-container">
        <ul className="past-entries">
            {posts.map((post) => (
                <li key={post.id}>
                    <h2>{post.title}</h2>
                    <h4>{post.entryDate}</h4>
                    <p>{post.content}</p>
                    <button id="delete-button" onClick={() => handleDelete(post.id)}>Delete</button>
                    {/* <button id="edit-button" onClick="">Edit</button> */}
                </li>
            ))}
        </ul>
        </div>
    );

}