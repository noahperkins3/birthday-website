import React, { useState } from 'react';

export function Musicals(props) {

    const [searchQuery, setSearchQuery] = useState("");

    return (
        <div className="musicals-container">
            <div className="favorite-albums">
                <iframe src="https://open.spotify.com/embed/album/2rFRK6qKdQHNAaCcHjRzav?utm_source=generator" width="100%" height="400" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" id="hunchback-album"></iframe>
                <iframe src="https://open.spotify.com/embed/album/5SXDpZh8lHqquvkcbheIYa?utm_source=generator" width="100%" height="400" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" id="spellingbee-album"></iframe>
                <iframe src="https://open.spotify.com/embed/album/1zwEN9cLtWg39zFJnj8brt?utm_source=generator" width="100%" height="400" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                <iframe src="https://open.spotify.com/embed/album/3aiuPuezy2yAwt4uvBUZxY?utm_source=generator" width="100%" height="400" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
            {/* <form className="spotify-search" onSy>
                <input value={searchQuery} onChange={e => setSearchQuery(e.target.value)} type="text" id="search" name="search" />
                <button type="submit">Search</button>
            </form> */}
        </div>
    )
}