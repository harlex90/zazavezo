import React, { useState } from 'react';
import Navbar from './Navbar';



const TestRafterNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return(
        <div>
            <button onClick={() => setIsOpen(!isOpen)}>Chevron</button>
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
            <span style={{fontSize: "6rem", fontWeight:"normal", opacity: "0.9"}}>
                <span style={{color: "red"}}>ZAZA</span>
                <span style={{color: "green"}}>VEZO</span>
            </span>
        </div>
    )
}

const TestTitleAndNavbar = () => {
    return(
        <div className='flex gap-2'>
            <TestRafterNavbar />
            <TestTitle />

        </div>
    )
}

export default TestTitleAndNavbar;