import { useSelector, useDispatch } from 'react-redux';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import { addPlayList, removePlayList } from '../../redux/audio/audio.actions';


import PlayCard from './playCard';

const PlayList = (
    {
        audioSrc,
        setAudioSrc,
        currentAudioId,
        setCurrentAudioId,
        isPlayList,
        setIsPlayList,
        audioTitle,
        setAudioTitle
    }) => {
    const { playLists } = useSelector(state => state.soundReducer);
    const { sideBarLists } = useSelector(state => state.soundReducer)
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

    const onClickPrevious = () => {
        if (currentAudioId) {
            let matchedSrc;
            let list;
            isPlayList ? list = playLists : list = sideBarLists
            for (let index = 0; index < list.length; index++) {
                if (list[index]._id === currentAudioId) {
                    let idx = index - 1
                    idx < 0 ? idx = list.length - 1 : idx = index - 1;
                    matchedSrc = list[idx].srcURL_HQ
                    setCurrentAudioId(list[idx]._id)
                    setAudioTitle(list[idx].name)
                    break
                }
            }
            setAudioSrc(matchedSrc)
        }
    }

    const onClickNext = (e) => {
        if (currentAudioId) {
            let list;
            isPlayList ? list = playLists : list = sideBarLists
            for (let index = 0; index < list.length; index++) {
                if (list[index]._id === currentAudioId) {
                    let idx = index + 1;
                    idx > list.length - 1 ? idx = 0 : idx = index + 1;
                    setAudioSrc(list[idx].srcURL_HQ)
                    setCurrentAudioId(list[idx]._id)
                    setAudioTitle(list[idx].name)
                    break
                }
            }

        }
    }

    const onHandlePlay = (id) => {
        for (let index = 0; index < playLists.length; index++) {
            if (playLists[index]._id === id) {
                setAudioSrc(playLists[index].srcURL_HQ)
                setAudioTitle(playLists[index].name)
                break
            }
        }
        setCurrentAudioId(id)
        setIsPlayList(true)
    }

    return (
        <div className='md:w-3/4 bg-daback md:ml-3 md:p-20 sm:w-full sm:p-10' onDrop={e => drop(e)} onDragOver={e => allowDrop(e)}>
            <div>
                <AudioPlayer
                    src={audioSrc}
                    header={`${audioTitle}`}
                    showSkipControls
                    onClickPrevious={onClickPrevious}
                    onClickNext={onClickNext}
                    progressJumpSteps={true}
                />
            </div>
            <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-20 mt-24 sm:grid-cols-1">
                {playLists.map((list, index) => {
                    return < PlayCard
                        key={index}
                        onHandleClickRemove={onHandleClickRemove}
                        list={list}
                        onHandlePlay={onHandlePlay}
                        onClickPrevious={onClickPrevious}
                        onClickNext={onClickNext}
                    />
                })}
            </div>
        </div>
    )
}

export default PlayList