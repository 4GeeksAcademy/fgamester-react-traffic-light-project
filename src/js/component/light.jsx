import React, { useState } from "react";



const Light = ({ color, selected, turnedOn }) => {

    return (<div onClick={turnedOn} className="light" style={{ backgroundColor: color, opacity: selected ? 1 : 0.2 }} />)
};
export default Light;