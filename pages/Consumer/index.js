import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import consumer from '../../styles/Consumer.module.css'

function Consumer() {
  const savedconfigArray = useSelector(state => state.adminAction.present.savedConfigArray);

  // useEffect(()=>{
  //   console.log(savedconfigArray)
  // }, [savedconfigArray])
  
  return (
    <ul className={consumer.consumerItemList}>
        {savedconfigArray && savedconfigArray.map((config, idx) => {
            switch(config.component){
                case "ElementParagraph" :
                    return (
                      <li key={idx}>
                        <p>{config.props.text ? config.props.text : 'Paragraph'}</p>
                      </li>
                      )
                case "ElementButton" :
                    return (
                      <li key={idx}>
                        <button onClick={()=> alert(config.props.message ? config.props.message : 'message')}>{config.props.text ? config.props.text : 'Button'}</button>
                      </li>)
                default : return null;
            }
        })}
    </ul>
  )
}

export default Consumer