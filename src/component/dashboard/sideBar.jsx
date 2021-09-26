import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { PlayIcon, PlusIcon } from "@heroicons/react/outline";

import { setSideBarData, addPlayList } from '../../redux/audio/audio.actions';

import SearchBox from './searchBox';

const initialData = [
    {
        tags: ['string[];'],
        _id: 'string;',
        name: 'strinjtyrjrtgs;',
        duration: 2,
        genre: 'string;',
        playsThisWeek: 5,
        playsThisWeekPremium: 5,
        srcURL_HQ: 'string;'
    }, {
        tags: ['striong[];'],
        _id: 'stringq;',
        name: 'astr-ing;',
        duration: 2,
        genre: 'string;',
        playsThisWeek: 5,
        playsThisWeekPremium: 5,
        srcURL_HQ: 'string;'
    }, {
        tags: ['string[];'],
        _id: 'stringd',
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
    const [searchField, setSearchField] = useState('');

    const onSearchChange = (e) => {
        setSearchField(e.target.value);
    }
    const onHandleClickAdd = (id) => {
        dispatch(addPlayList(id))
    }
    useEffect(() => {
        dispatch(setSideBarData(initialData))
    }, [])

    const drag = (ev) => {
        ev.dataTransfer.setData("listId", ev.target.id);
    }

    return (
        <aside className='w-1/4 bg-daback text-center'>
            <SearchBox onSearchChange={onSearchChange} />
            <div className="p-3">
                {sideBarLists
                    .filter(list => list.name.toLowerCase().includes(searchField.toLowerCase()))
                    .sort((a, b) => {
                        var nameA = a.name.toUpperCase(); // ignore upper and lowercase
                        var nameB = b.name.toUpperCase(); // ignore upper and lowercase
                        if (nameA < nameB) {
                            return -1;
                        }
                        if (nameA > nameB) {
                            return 1;
                        }
                        return 0;
                    })
                    .map((data, index) => {
                        return (
                            <div id={data._id} key={data.name + index} draggable="true" onDragStart={e => drag(e)} className="flex mt-1" >
                                <button id={data._id} className="w-6 h-5 bg-white"> <PlayIcon /> </button>
                                <div className="w-full">{data.name}</div>
                                <button onClick={() => onHandleClickAdd(data._id)} className="w-6 bg-white"> <PlusIcon /> </button>
                            </div>
                        )
                    })}
            </div>
        </aside>
    )
}

export default SideBar