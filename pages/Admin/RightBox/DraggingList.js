import React from 'react'

function DraggingList({configArray, setEditElemNum}) {
    const setEditElemNumHandler=(idx)=>{
        setEditElemNum(idx)
    }
    
  return (
    <ul>
        {configArray.map((config, idx) => {
            switch(config.component){
                case "ElementParagraph" :
                    return <li key={idx}><p onClick={()=> setEditElemNumHandler(idx)}>{config.props.text ? config.props.text : 'Paragraph'}</p></li>;
                case "ElementButton" :
                    return <li key={idx}><button onClick={()=> setEditElemNumHandler(idx)}>{config.props.text ? config.props.text : 'Button'}</button></li>;
                default : return null;
            }
        })}
    </ul>
  )
}

export default DraggingList