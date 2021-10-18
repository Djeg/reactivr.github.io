import React from 'react'
import { Render, useSelector } from 'reactivr'
import * as Menu from '../Menu/Menu'
import styles from './MainContent.module.css'

/**
 * This is the main content block containing
 * the menu and the page content
 */
export default function MainContent({ children }) {
  const { open } = useSelector(Menu)

  return (
    <div className={`${styles.mainContent} ${open ? styles.open : ''}`}>
      <Render state={Menu} />
      <div>{children}</div>
    </div>
  )
}
