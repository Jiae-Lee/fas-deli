import React, { useState, useEffect } from 'react'
import Mouse from './util/Mouse'
import Dragging from './util/Dragging'
import admin from '../../../styles/Admin.module.css'
import DraggingList from './DraggingList'
import EditBox from './EditBox'

export default function RightBox() {
    const [configArray, setConfigArray] = useState([])
    const [editElemNum, setEditElemNum] = useState(null)

    let config = {
        id: '',
        component: '',
        props: {}
    }

    const dropEvent = (e) => {
        e.preventDefault()
        let draggingElement = e.path[0].id;
        setConfigArray([...configArray, {...config, id: 'id'+Math.random(), component: draggingElement}])
    }

    useEffect(()=>{
        document.addEventListener('dragend', dropEvent);
        console.log('configArray', configArray);
    }, [configArray])

  return (
    <div className={admin.rightBoxWrap}>
        <div className={admin.infoContainer}>
            <ul>
                <li>
                    Mouse : (<Mouse />) 
                </li>
                <li>
                    Dragging : <Dragging />
                </li>
                <li>
                    Instance : {configArray.length}
                </li>
                <li>
                    Config : {JSON.stringify(configArray[editElemNum])}
                </li>
            </ul>
            <div className={admin.infoDraggingItemList}>
                <DraggingList 
                    configArray={configArray}
                    setEditElemNum={setEditElemNum}
                />
            </div>
        </div>
        <div className={admin.editContainer}>
            <EditBox 
                configArray={configArray}
                setConfigArray={setConfigArray}
                editElemNum={editElemNum}
            />
        </div>
    </div>
  )
}
