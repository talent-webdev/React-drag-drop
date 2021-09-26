import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import { addPlayList, removePlayList } from '../../redux/audio/audio.actions';


import PlayCard from './playCard';

const PlayList = () => {

    const { playLists } = useSelector(state => state.soundReducer);
    const dispatch = useDispatch();

    const allowDrop = (ev) => {
        ev.preventDefault();
    }

    const drop = (ev) => {
        ev.preventDefault();
        const listId = ev.dataTransfer.getData("listId");

        if (!listId) return
        dispatch(addPlayList(listId))
    }

    const onHandleClickRemove = (id) => {
        dispatch(removePlayList(id))
    }

    return (
        <div className='w-3/4 bg-daback ml-5 p-20' onDrop={e => drop(e)} onDragOver={e => allowDrop(e)}>
            <div>
                <AudioPlayer
                    autoPlay
                    src=" ../../../../../public/audio.mp3 "
                    onPlay={e => console.log("onPlay")}
                    showSkipControls
                />
            </div>
            <div className="grid grid-cols-3 gap-12">
                {playLists.map((list, index) => {
                    return < PlayCard key={index} onHandleClickRemove={onHandleClickRemove} list={list} />
                })}
            </div>
        </div>
    )
}

export default PlayList