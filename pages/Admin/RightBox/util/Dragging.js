import React, { useEffect, useState } from 'react'

function Dragging() {
    const [draggingElement, setDraggingElement] = useState('')

    const dragStarttHandler =(e)=> {
        let element = e.path[0].id;
        setDraggingElement('Element'+element)
    }
    const dragEndHandler =(e)=> {
        setDraggingElement('')
    }

    useEffect(()=>{
        document.addEventListener('dragstart', dragStartEvent);
        document.addEventListener('dragend', dragEndEvent);
    }, [])
  return (
    <span>{draggingElement}</span>
  )
}

export default Dragging