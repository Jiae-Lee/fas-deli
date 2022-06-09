import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { savedConfigArray } from '../../store/modules/adminAction'
import styles from '../../styles/Nav.module.css'
import Link from 'next/link'

function Nav() {
  const dispatch = useDispatch();
  const configArray = useSelector(state => state.adminAction.configArray);
  // const savedconfigArray = useSelector(state => state.adminAction.savedConfigArray);

  const saveHandler =()=> {
    dispatch(savedConfigArray(configArray));
  }

  const viewHandler =()=> {
    window.open('/consumer', '_blank')
  }

  return (
    <nav>
        <ul className={styles.navbar}>
            <li className={styles.navItem}
              onClick={saveHandler} >
              Save
            </li>
            <li className={styles.navItem}>Undo</li>
            <li className={styles.navItem}>Redo</li>
            <li className={styles.navItem}>Export</li>
            <li className={styles.navItem}>Import</li>
            <Link href='/Consumer' passHref>
              <a target="_blank">
              <li className={styles.navItem}
                // onClick={viewHandler} 
                >
                View
              </li>
              </a>
            </Link>
        </ul>
    </nav>
  )
}

export default Nav