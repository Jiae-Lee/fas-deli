import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import consumer from '../../styles/Consumer.module.css'

function Consumer() {
  const savedHistoryToStore = useSelector(state => state.adminAction.savedHistory);
  let viewList = savedHistoryToStore

  return (
    <ul className={consumer.consumerItemList}>
        {viewList && viewList.map((config, idx) => {
            switch(config.body.component){
                case "ElementParagraph" :
                    return (
                      <li key={idx}>
                        <p>{config.body.text ? config.body.text : 'Paragraph'}</p>
                      </li>
                      )
                case "ElementButton" :
                    return (
                      <li key={idx}>
                        <button onClick={()=> alert(config.body.message ? config.body.message : 'message')}>{config.body.text ? config.body.text : 'Button'}</button>
                      </li>)
                default : return null;
            }
        })}
    </ul>
  )
}

export default Consumer