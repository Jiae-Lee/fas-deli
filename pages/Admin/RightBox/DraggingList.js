import React from 'react'

function DraggingList({configArray, setEditElemNum}) {
    const setEditElemNumHandler=(idx)=>{
        setEditElemNum(idx)
    }
    
  return (
    <ul>
        {configArray.map((item, idx) => {
            switch(item.component){
                case "Paragraph" :
                    return <li key={idx}><p onClick={()=> setEditElemNumHandler(idx)}>Paragraph</p></li>;
                case "Button" :
                    return <li key={idx}><button onClick={()=> setEditElemNumHandler(idx)}>button</button></li>;
                default : return null;
            }
        })}
    </ul>
  )
}

export default DraggingList