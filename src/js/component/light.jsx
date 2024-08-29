import React, { useState } from "react";



const Light = ({ color }) => {

    const [unselected, setSelected] = useState(false);

    const handleClick = () => {
        setSelected(!unselected)
    }

    return (<div onClick={handleClick} className="light" style={{ backgroundColor: color, opacity: unselected ? 1 : 0.5 }} />)
};
export default Light;