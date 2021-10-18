import React from 'react'
import Logo from './Logo'
import styles from './Header.module.css'
import * as Menu from '../Menu/Menu'
import { Link } from 'react-router-dom'
import { useSelector, useForeignActionEvent } from 'reactivr'

/**
 * Display the header
 */
export default function Header() {
  const { open } = useSelector(Menu)
  const onMenuToggle = useForeignActionEvent('@default', Menu.toggle)

  return (
    <header className={styles.header}>
      <button
        className={`hamburger hamburger--elastic ${styles.hamburger} ${
          open ? 'is-active' : ''
        }`}
        type="button"
        onClick={onMenuToggle}
      >
        <span className="hamburger-box">
          <span className={`hamburger-inner ${styles.hamburgerInner}`}></span>
        </span>
      </button>
      <Link to="/">
        <Logo width="40" height="40" />
      </Link>
      <a
        href="https://github.com/Djeg/reactivr/tree/master"
        target="_blank"
        rel="noreferrer"
        className={styles.github}
      >
        <i className="fab fa-github" />
      </a>
    </header>
  )
}
