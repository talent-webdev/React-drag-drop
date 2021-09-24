import { PlayIcon, TrashIcon } from "@heroicons/react/outline";

const PlayCard = () => {
    return (
        <div className="flex mt-1 h-60 border" >
            <button className="w-8 h-8 bg-white"> <PlayIcon /> </button>
            <div className="w-full text-center">dsfsdfsdf</div>
            <button className="w-8 h-8 bg-white"> <TrashIcon /> </button>
        </div>
    )
}

export default PlayCard