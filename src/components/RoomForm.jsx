import React, { useRef } from "react";

const RoomForm = ({ setCurrentRoom }) => {
    let inputRef = useRef(null);
    return (
        <div className="w-full h-full flex items-center justify-center">
            <div className="w-[22rem] h-[22rem] flex flex-col justify-center items-center gap-4 bg-slate-300 rounded-xl">
                <h3 className="font-semibold text-2xl">Enter Room ID to Join</h3>
                <br />
                <input autoFocus ref={inputRef} onKeyUp={(e) => {
                    if (e.key == 'Enter') {
                        // joining room
                        setCurrentRoom(inputRef.current.value)
                    }
                }} type="text" placeholder="Enter Room ID . . ." className="p-3 font-medium focus:outline-none border-2 border-gray-500 rounded-lg" />
                <button onClick={() => setCurrentRoom(inputRef.current.value)} className="p-4 bg-blue-800 text-white rounded-lg">
                    Enter Room
                </button>
            </div>
        </div>
    )
}

export default RoomForm