import React, { useEffect, useState } from 'react'

function Mouse() {
    const [position, setPosition] = useState([0, 0])

    function setPositionHandler(e){
        setPosition([e.offsetX, e.offsetY])
    }

    useEffect(()=>{
        window.addEventListener('mousemove', setPositionHandler);
        window.addEventListener('drag', setPositionHandler);
    }, [])
  return (
    <span>{position[0]}, {position[1]}</span>
  )
}

export default Mouse