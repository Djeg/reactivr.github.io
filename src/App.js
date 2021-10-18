import * as React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import { createStore, Provider, Render } from 'reactivr'
import * as Menu from './Menu/Menu'
import * as Header from './Header/Header'
import MainContent from './Shared/MainContent'
import styles from './App.module.css'
import Home from './Home/Home'

export default function App() {
  return (
    <HashRouter>
      <Provider
        store={createStore({
          modules: [Menu, Header],
        })}
      >
        <div className={styles.app}>
          <Render state={Header} />
          <MainContent>
            <Route path="/" exact>
              <Home />
            </Route>
          </MainContent>
        </div>
      </Provider>
    </HashRouter>
  )
}
