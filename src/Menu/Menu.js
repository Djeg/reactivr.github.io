import { evolve, not } from 'ramda'
import { action, reduce, when } from 'reactivr'
import styles from './Menu.module.css'

/**
 * The name of this module
 */
export const name = Symbol('menu')

/**
 * contains the menu state
 */
export const state = {
  open: false,
}

/**
 * toggle the menu
 */
export const toggle = action(
  when('toggle'),
  reduce(() =>
    evolve({
      open: not,
    }),
  ),
)

/**
 * The menu view
 */
export const View = ({ open }) => {
  return <div className={`${styles.menuPanel} ${open ? 'open' : ''}`}></div>
}
