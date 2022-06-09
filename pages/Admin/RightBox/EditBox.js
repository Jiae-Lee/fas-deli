import React, {useState, useEffect} from 'react'
import admin from '../../../styles/Admin.module.css'

function EditBox({configArray, setConfigArray, editElemNum}) {
    const [editElementConfig, setEditElementConfig] = useState({})

    useEffect(()=>{
        let editElem = configArray[editElemNum]

        if(editElem){
            setEditElementConfig(editElem)
        }
    },[editElemNum, configArray])

    const inputChangeHandler=(e)=>{
        const updateConfig = {
            props: {
                ...editElementConfig.props,
                [e.currentTarget.name]: e.currentTarget.value
            }
        }
        const newArray = configArray.map((config) =>
            config.id === editElementConfig.id ? {...config, ...updateConfig} : config
        )

        setConfigArray(newArray)
    }

    switch(editElementConfig.component){
        case "Paragraph" :
            return (
                <div className={admin.editList}>
                    <label htmlFor='paragraphText'>Paragraph Text</label>
                    <input id='paragraphText' name='text' onChange={inputChangeHandler}></input>
                </div>
            );
        case "Button" :
            return (
                <div className={admin.editList}>
                    <label htmlFor='buttonText'>Button Text</label>
                    <input id='buttonText' name='text' onChange={inputChangeHandler}></input>
                    <label htmlFor='buttonMessage'>Alert Message</label>
                    <input id='buttonMessage' name='message' onChange={inputChangeHandler}></input>
                </div>
            );
        default : return null;
    }
}

export default EditBox