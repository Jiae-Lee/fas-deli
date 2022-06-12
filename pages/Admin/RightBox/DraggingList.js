import React from 'react'

function DraggingList({mergedHistoy, setEditElemNum}) {
    const onClickHandler=(idx)=>{
        setEditElemNum(idx)
    }
    
  return (
    <ul>
        {mergedHistoy.map((config, idx) => {
            switch(config.body.component){
                case "ElementParagraph" :
                    return <li key={idx}><p onClick={()=> onClickHandler(idx)}>{config.body.text ? config.body.text : 'Paragraph'}</p></li>;
                case "ElementButton" :
                    return <li key={idx}><button onClick={()=> onClickHandler(idx)}>{config.body.text ? config.body.text : 'Button'}</button></li>;
                default : return null;
            }
        })}
    </ul>
  )
}

export default DraggingList