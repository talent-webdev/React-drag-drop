import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { PlayIcon, PlusIcon } from "@heroicons/react/outline";

import { setSideBarData } from '../../redux/audio/audio.actions';
import SearchBox from './searchBox';

const initialData = [
    {
        tags: ['string[];'],
        _id: 'string;',
        name: 'string;',
        duration: 2,
        genre: 'string;',
        playsThisWeek: 5,
        playsThisWeekPremium: 5,
        srcURL_HQ: 'string;'
    }
]



const SideBar = () => {
    const dispatch = useDispatch()
    const { sideBarLists } = useSelector(state => state.soundReducer)

    useEffect(() => {
        dispatch(setSideBarData(initialData))
    }, [])

    const drag = (ev) => {
        ev.dataTransfer.setData("text", ev.target.id);
    }

    return (
        <aside className='w-1/4 bg-daback text-center'>
            <SearchBox />
            <div className="p-3">
                {sideBarLists.map(data => {
                    return (
                        <div id={data.data + 'id'} key={data.name} draggable="true" onDragStart={e => drag(e)} className="flex mt-1" >
                            <button className="w-6 h-5 bg-white"> <PlayIcon /> </button>
                            <div className="w-full">{data.name}</div>
                            <button className="w-6 bg-white"> <PlusIcon /> </button>
                        </div>
                    )
                })}
            </div>
        </aside>
    )
}

export default SideBar