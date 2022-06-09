import React from 'react'
import styles from '../../styles/Nav.module.css'

function Nav() {
  return (
    <nav>
        <ul className={styles.navbar}>
            <li className={styles.navItem}>Save</li>
            <li className={styles.navItem}>Undo</li>
            <li className={styles.navItem}>Redo</li>
            <li className={styles.navItem}>Export</li>
            <li className={styles.navItem}>Import</li>
            <li className={styles.navItem}>View</li>
        </ul>
    </nav>
  )
}

export default Nav