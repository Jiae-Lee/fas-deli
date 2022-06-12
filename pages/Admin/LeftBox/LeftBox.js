import React from 'react'
import styles from '../../../styles/Admin.module.css'

export default function LeftBox() {

    const itemList = [
        {
            name : 'Paragraph'
        },
        {
            name : 'Button'
        }
    ]

  return (
    <div className={styles.items}>
        {
            itemList.map(((item) => (
                <div className={styles.item} key={item.name} id={item.name} draggable='true'>
                    <div className={styles.item__thumbnail}>{(item.name).slice(0,1)}</div>
                    <span className={styles.item__name}>{item.name}</span>
                </div>
            )))
        }
    </div>
  )
}
