import * as React from 'react'
import { HashRouter } from 'react-router-dom'
import { createStore, Provider } from 'reactivr'
import * as Menu from './Menu/Menu'
import Header from './Header/Header'
import MainContent from './Shared/MainContent'
import styles from './App.module.css'

export default function App() {
  return (
    <HashRouter>
      <Provider
        store={createStore({
          modules: [Menu],
        })}
      >
        <div className={styles.app}>
          <Header />
          <MainContent>
            <h1>Welcome</h1>
          </MainContent>
        </div>
      </Provider>
    </HashRouter>
  )
}
