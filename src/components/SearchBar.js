import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar({ setQueryHandler }) {
    const [query, setQuery] = useState('');
    const isEnabled = query.length > 0;

    function handleClick() {
        setQueryHandler(query);
    }

    function keyPressCheck(e) {
        if (e.keyCode === 13) {
            setQueryHandler(query);
        }
    }

    return (
        <span className="searchbar">
            <input
                type="text"
                name="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyUp={keyPressCheck}
                placeholder="Search for Netflix titles around the world"
            />

         <button
             disabled={!isEnabled}
             type="button"
             onClick={handleClick}
         >
        Zoek
      </button>
    </span>
            );
            }

export default SearchBar;