import React, { useState } from 'react';
import Navbar from '../components/Navbar';



const TestRafterNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return(
        <div>
            <button onClick={() => setIsOpen(!isOpen)}>V</button>
            {isOpen && (
                <div>
                    <Navbar />
                </div>
            )}
        </div>
    )
}

const TestTitle = () => {
    return(
        <div>
            <span className="flex flex-col md:flex-row text-8xl font-normal opacity-90">
                <span style={{color: "red"}}>ZAZA</span>
                <span style={{color: "green"}}>VEZO</span>
            </span>
        </div>
    )
}

const TestTitleAndNavbar = () => {
    return(
        <div className='flex flex-col md:flex-row gap-2'>
            <TestRafterNavbar />
            <TestTitle />
        </div>
    )
}

export default TestTitleAndNavbar;