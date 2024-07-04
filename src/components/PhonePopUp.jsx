import React from "react";


const PhonePopUp = ({ onClose }) => {    
    return(
        <div className="flex flex-col border border-black bg-white">
            <div className="flex justify-end">
                <button onClick={onClose} className="bg-black text-white px-2 py-0.5">
                    x
                </button>
            </div>
            <div className="flex flex-col bg-white p-8">
                <div className="whitespace-nowrap">
                    06 41 02 30 11
                </div>
                <div className="whitespace-nowrap">
                    00 261 33 06 951 32
                </div>
            </div>
        </div>
    )
}

export default PhonePopUp;