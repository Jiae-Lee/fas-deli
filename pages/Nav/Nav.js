import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { savedHistory, walkStepToStore, historyToStore } from '../../store/modules/adminAction'
import styles from '../../styles/Nav.module.css'
import Link from 'next/link'

function Nav() {
  const dispatch = useDispatch();
  const getHistoryToStore = useSelector(state => state.adminAction.historyToStore);
  const mergeHistoryToStore = useSelector(state => state.adminAction.mergeHistoryToStore);
  const [walkStep, setWalkStep] = useState(0)

  useEffect(()=>{
    dispatch(walkStepToStore(walkStep));
  }, [walkStep])

  const saveHandler =()=> {
    console.log('save', mergeHistoryToStore)
    dispatch(savedHistory(mergeHistoryToStore));
  }

  const undoHandler =()=> {
    if(walkStep < getHistoryToStore.length ){
      setWalkStep(walkStep+1)
    }
  }

  const redoHandler =()=> {
    if(walkStep > 0){
      setWalkStep(walkStep-1)
    }
  }

  const exportHandler =()=> {
    localStorage.setItem('merge',JSON.stringify(mergeHistoryToStore));
  }

  const importHandler =()=> {
    let importData = JSON.parse(localStorage.getItem('merge'));
    setWalkStep(0);
    dispatch(historyToStore(importData));
  }

  return (
    <nav>
        <ul className={styles.navbar}>
            <li className={styles.navItem}
              onClick={saveHandler} 
            >Save</li>
            <li className={styles.navItem}
              onClick={undoHandler} 
            >Undo</li>
            <li className={styles.navItem}
              onClick={redoHandler} 
            >Redo</li>
            <li className={styles.navItem}
              onClick={exportHandler}
            >Export</li>
            <li className={styles.navItem}
              onClick={importHandler}
            >Import</li>
            <Link href='/Consumer' passHref>
                <li className={styles.navItem}>View</li>
            </Link>
        </ul>
    </nav>
  )
}

export default Nav