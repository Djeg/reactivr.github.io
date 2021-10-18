import React from 'react'
import Logo from './Logo'
import styles from './Header.module.css'
import * as Menu from '../Menu/Menu'
import { Link } from 'react-router-dom'
import {
  useSelector,
  useForeignActionEvent,
  action,
  when,
  reduce,
} from 'reactivr'
import { assoc } from 'ramda'

/**
 * Contains the name of this module
 */
export const name = Symbol('header')

/**
 * Contains the state of the header
 */
export const state = {
  displayLogo: true,
}

/**
 * Display or not the logo
 */
export const setLogo = action(when('setLogo'), reduce(assoc('displayLogo')))

/**
 * Display the header
 */
export const View = ({ displayLogo }) => {
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
      {displayLogo && (
        <Link to="/">
          <Logo width="40" height="40" />
        </Link>
      )}
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
