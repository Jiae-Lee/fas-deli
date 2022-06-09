import React, { useState, useEffect } from 'react'
import MousePosition from './util/MousePosition'
import Dragging from './util/Dragging'
import admin from '../../../styles/Admin.module.css'
import DraggingList from './DraggingList'
import EditBox from './EditBox'
import { useDispatch } from 'react-redux'
import { configArrayToStore } from '../../../store/modules/adminAction'

export default function RightBox() {
    const dispatch = useDispatch();
    const [configArray, setConfigArray] = useState([])
    const [editElemNum, setEditElemNum] = useState(null)

    let config = {
        id: '',
        component: '',
        props: {}
    }

    const dropEvent = (e) => {
        e.preventDefault()
        let element = e.path[0].id;
        setConfigArray([...configArray, {...config, id: 'id'+Math.random(), component: 'Element'+element}])
    }

    useEffect(()=>{
        document.addEventListener('dragend', dropEvent);
        dispatch(configArrayToStore(configArray));
    }, [configArray])

  return (
    <div className={admin.rightBoxWrap}>
        <div className={admin.infoContainer}>
            <ul>
                <li>
                    Mouse : (<MousePosition />) 
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
