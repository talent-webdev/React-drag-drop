import React from 'react';

const Main = () => {
  const allowDrop = (ev) => {
    ev.preventDefault();
  }

  const drop = (ev) => {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }

  return (
    <ul className='w-10' onDrop={e => drop(e)} onDragOver={e => allowDrop(e)} style={{height: '500px'}}>
    </ul>
  )
}

export default Main