import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { PlusSmIcon } from "@heroicons/react/outline";
import { PlayIcon } from "@heroicons/react/solid";
import axios from 'axios'

import { setSideBarData, addPlayList } from '../../redux/audio/audio.actions';

import SearchBox from './searchBox';


const initialData = [
    {
        "tags": [],
        "_id": "614d25902087803b833f9d50",
        "genre": "ambient",
        "name": "ASKII - Hegelburg - 03 Woods",
        "srcURL_HQ": "https://cdn.soncraft.app/music/high_quality/genre/ambient/ASKII - Hegelburg - 03 Woods",
        "__v": 0,
        "playsThisWeek": 0,
        "playsThisWeekPremium": 0
    },
    {
        "tags": [],
        "_id": "614d25e82087803b833f9d52",
        "genre": "ambient",
        "name": "ASKII - Hegelburg - 04 The White River",
        "srcURL_HQ": "https://cdn.soncraft.app/music/high_quality/genre/ambient/ASKII - Hegelburg - 04 The White River",
        "__v": 0,
        "playsThisWeek": 0,
        "playsThisWeekPremium": 0
    },
    {
        "tags": [],
        "_id": "614d26492087803b833f9d54",
        "genre": "ambient",
        "name": "ASKII - Hegelburg - 05 Harvest",
        "srcURL_HQ": "https://cdn.soncraft.app/music/high_quality/genre/ambient/ASKII - Hegelburg - 05 Harvest",
        "__v": 0,
        "playsThisWeek": 0,
        "playsThisWeekPremium": 0
    },
    {
        "tags": [],
        "_id": "614d26aa2087803b833f9d56",
        "genre": "ambient",
        "name": "ASKII - Hegelburg - 06 Sails",
        "srcURL_HQ": "https://cdn.soncraft.app/music/high_quality/genre/ambient/ASKII - Hegelburg - 06 Sails",
        "__v": 0,
        "playsThisWeek": 0,
        "playsThisWeekPremium": 0
    },
    {
        "tags": [],
        "_id": "614d2aba2087803b833f9d58",
        "genre": "tension",
        "name": "an unsettling feeling",
        "srcURL_HQ": "https://cdn.soncraft.app/music/high_quality/genre/tension/an unsettling feeling",
        "__v": 0,
        "playsThisWeek": 0,
        "playsThisWeekPremium": 0
    },
    {
        "tags": [],
        "_id": "614d2e272087803b833f9d5a",
        "genre": "dungeon",
        "name": "The Fire Catacombs",
        "srcURL_HQ": "https://cdn.soncraft.app/music/high_quality/genre/dungeon/The Fire Catacombs",
        "__v": 0,
        "playsThisWeek": 0,
        "playsThisWeekPremium": 0
    }
]

const SideBar = (
    {
        setAudioSrc,
        setCurrentAudioId,
        setIsPlayList,
        setAudioTitle
    }) => {

    const dispatch = useDispatch()
    const { sideBarLists } = useSelector(state => state.soundReducer)
    const [searchField, setSearchField] = useState('');

    useEffect(() => {
        // const getDatas = async () => {
        //     const res = await axios.post("https://api.soncraft.app/api/tracks/getAllTracks");
        //     dispatch(setSideBarData(res.data))
        // }
        // getDatas();
        dispatch(setSideBarData(initialData))
    }, [])

    const onSearchChange = (e) => {
        setSearchField(e.target.value);
    }

    const onHandleClickAdd = (id) => {
        dispatch(addPlayList(id))
    }

    const onHandlePlay = (id) => {
        for (let index = 0; index < sideBarLists.length; index++) {
            if (sideBarLists[index]._id === id) {
                setAudioSrc(sideBarLists[index].srcURL_HQ)
                setAudioTitle(sideBarLists[index].name)
                break
            }
        }
        setCurrentAudioId(id)
        setIsPlayList(false)
    }

    const drag = (ev) => {
        ev.dataTransfer.setData("listId", ev.target.id);
    }

    return (
        <aside className=' flex justify-center md:w-1/4 bg-daback text-center sm:w-full '>
            <div className='w-11/12'>
                <SearchBox onSearchChange={onSearchChange} />
                <div className='w-full'>
                    {sideBarLists && sideBarLists
                        .filter(list => list.name.toLowerCase().includes(searchField.toLowerCase()))
                        .map((data, index) => {
                            return (
                                <div id={data._id} key={data.name + index} draggable="true" onDragStart={e => drag(e)} className="flex mt-1 hover:border-abbey border-solid border-2 border-white border" >
                                    <button onClick={() => onHandlePlay(data._id)} id={data._id} className="w-6 h-6 bg-white"> <PlayIcon /> </button>
                                    <div className="w-full overflow-ellipsis overflow-hidden whitespace-nowrap">{data.name}</div>
                                    <button onClick={() => onHandleClickAdd(data._id)} className="w-6 bg-white"> <PlusSmIcon /> </button>
                                </div>
                            )
                        })}
                </div>
            </div>
        </aside>
    )
}

export default SideBar