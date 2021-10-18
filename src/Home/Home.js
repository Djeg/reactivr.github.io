import React from 'react'
import Logo from '../Header/Logo'
import styles from './Home.module.css'

/**
 * This is the home page
 */
export default function Home() {
  return (
    <div className={styles.home}>
      <p>
        <Logo width="100" height="100" />
      </p>
      <h1>ReactiveR</h1>
      <p className={styles.sub}>State, Action and Effect at your fongertips</p>
      <p>
        <button className="btn">Get Started</button>
      </p>
    </div>
  )
}
