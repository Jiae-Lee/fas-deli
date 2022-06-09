import React from 'react'
import LeftBox from './LeftBox/LeftBox'
import RightBox from './RightBox/RightBox'
import styles from '../../styles/Admin.module.css'

function Admin() {
  return (
    <div className={styles.adminWrap}>
        <LeftBox />
        <RightBox />
    </div>
  )
}

export default Admin