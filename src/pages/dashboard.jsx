import { useState } from "react";
import PlayList from "../component/dashboard/playList";
import SideBar from '../component/dashboard/sideBar'

const DashboardPage = () => {
    const [audioSrc, setAudioSrc] = useState(null);
    const [currentAudioId, setCurrentAudioId] = useState(null)
    const [isPlayList, setIsPlayList] = useState(false)
    const [audioTitle, setAudioTitle] = useState('')

    return (
        <main className="bg-white md:flex sm:block p-px min-h-screen">
            <SideBar
                audioSrc={audioSrc}
                setAudioSrc={setAudioSrc}
                currentAudioId={currentAudioId}
                setCurrentAudioId={setCurrentAudioId}
                isPlayList={isPlayList}
                setIsPlayList={setIsPlayList}
                audioTitle={audioTitle}
                setAudioTitle={setAudioTitle} />
            <PlayList
                audioSrc={audioSrc}
                setAudioSrc={setAudioSrc}
                currentAudioId={currentAudioId}
                setCurrentAudioId={setCurrentAudioId}
                isPlayList={isPlayList}
                setIsPlayList={setIsPlayList}
                audioTitle={audioTitle}
                setAudioTitle={setAudioTitle} />
        </main>
    )
}

export default DashboardPage;