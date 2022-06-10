import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { savedConfigArray } from '../../store/modules/adminAction'
import { ActionCreators } from 'redux-undo'
import styles from '../../styles/Nav.module.css'
import Link from 'next/link'

function Nav() {
  const dispatch = useDispatch();
  const configArray = useSelector(state => state.adminAction.present.configArray);
  const savedconfigArray = useSelector(state => state.adminAction.present.savedConfigArray);
  useEffect(()=>{
    console.log(savedconfigArray)
  }, [savedconfigArray])


  const saveHandler =()=> {
    dispatch(savedConfigArray(configArray));
  }

  const undoHandler =()=> {
    dispatch(ActionCreators.undo());
  }
  const redoHandler =()=> {
    dispatch(ActionCreators.redo());
  }


  return (
    <nav>
        <ul className={styles.navbar}>
            <li className={styles.navItem}
              onClick={saveHandler} >
              Save
            </li>
            <li className={styles.navItem}
              onClick={undoHandler} >Undo</li>
            <li className={styles.navItem}
              onClick={redoHandler} >Redo</li>
            <li className={styles.navItem}>Export</li>
            <li className={styles.navItem}>Import</li>
            <Link href='/Consumer' passHref>
              {/* <a target="_blank"> */}
                <li className={styles.navItem}>View</li>
              {/* </a> */}
            </Link>
        </ul>
    </nav>
  )
}

export default Nav