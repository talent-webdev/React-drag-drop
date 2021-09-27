import { TrashIcon } from "@heroicons/react/outline";
import { PlayIcon } from "@heroicons/react/solid";
const PlayCard = ({ onHandleClickRemove, onHandlePlay, onClickNext, onClickPreview, list }) => {
    return (
        <div className="flex justify-center" >
            <div className="w-7 h-5 bg-white absolute -mt-5 -ml-60 boder-white border-2 border hover:border-abbey">
                <button className="w-5 h-5  " onClick={() => onHandlePlay(list._id)}> <PlayIcon /> </button>
            </div>

            <div className="flex ">
                <div className=" h-60 w-60 border-solid border-2 border-abbey border">
                    <img src="./mps.jpg" className="h-52 w-60" />
                    <div className="flex text-sm justify-center px-2 mt-1">
                        <div>
                            <button className="w-5 h-5 mr-2" onClick={() => onHandlePlay(list._id)}> <PlayIcon /> </button>
                        </div>
                        <div className=" overflow-ellipsis overflow-hidden whitespace-nowrap">
                            {list.name}
                        </div>
                    </div>

                </div>
                <button className="w-8 h-8 bg-white boder-white border-2 border hover:border-abbey" onClick={() => onHandleClickRemove(list._id)}> <TrashIcon /> </button>
            </div>

        </div>
    )
}

export default PlayCard