import { PlayIcon, TrashIcon } from "@heroicons/react/outline";

const PlayCard = (props) => {
    return (
        <div className="flex mt-1 h-60 border" >
            <button className="w-8 h-8 bg-white"> <PlayIcon /> </button>
            <div className="w-full text-center">{props.list.name}</div>
            <button className="w-8 h-8 bg-white" onClick={() => props.onHandleClickRemove(props.list._id)}> <TrashIcon /> </button>
        </div>
    )
}

export default PlayCard