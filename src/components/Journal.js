
import React, { useState } from 'react';


export function JournalForm({ onSubmit }) {
    let date = new Date();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();

        const newPost = {
            title,
            content
        }

        onSubmit(newPost);

        setFormSubmitted(true);
        setTitle('');
        setContent('');
    }

    return (
        <div>
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
                <button type="submit">Post</button>
            </form>
            {formSubmitted && <PastEntries />}
        </div>
    )
}

export function PastEntries({ handleDelete, posts }) {

    return (
        <div>
            {posts.map((post) => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                    <button onClick={() => handleDelete(post.id)}>Delete</button>
                    <hr />
                </div>
            ))}
        </div>
    );

}