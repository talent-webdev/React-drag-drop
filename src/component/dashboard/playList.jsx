import React from 'react';

import PlayCard from './playCard';

const PlayList = () => {
    const allowDrop = (ev) => {
        ev.preventDefault();
    }

    const drop = (ev) => {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
    }

    return (
        <div className='w-3/4 bg-daback ml-5 p-20' onDrop={e => drop(e)} onDragOver={e => allowDrop(e)}>
            <div>Audio</div>
            <div className="grid grid-cols-3 gap-12">
                <PlayCard />
            </div>
        </div>

    )
}

export default PlayList