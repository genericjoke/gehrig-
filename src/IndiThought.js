import React, { useState } from 'react';

function IndiThought({ opinion, name }) {
    const [isHovering, setHovered] = useState(false)


    return (
        <div onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="card-container normal-card">
            <div id="card-content">
                {isHovering ? <strong><p>"{opinion}"</p><p> ~{name}</p></strong> : <h1>{name}</h1>}
            </div>
        </div>
    )
}

export default IndiThought;

//http://username.github.io/reponame/db.json