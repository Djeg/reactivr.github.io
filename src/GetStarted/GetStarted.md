# Get Started

> In this section you will learn how to install
> and setup **reactivr** in your project.

**ReactiveR** is library for react that enhance
your user experience by introducing simple
reactive concepts. Thanks to this tools,
making states, triggering actions and
producing effects becomes simple has
making a component !

## Install ReactivR

In order to start using **ReactivR** you first
need to install the library on your node_modules

### Using npm

```bash
npm install reactivr
```

### Using yarn

```bash
yarn add reactivr
```

## Create your first reactive module

**ReactivR** is based on a simple concept wich
is named _Reactive Module_. It is a javascript
file wich must contains some mandatory fields
such has **name** (of type `symbol`), **state** (of type
`{}`) and a **view** (of type `React.FC`)

Let's take a basic example and creates a Counter
module:

```jsx
// src/Counter.js

/**
 * Contains the name of the
 * reactive module. Here
 * Counter seems perfect
 */
export const name = Symbol('counter')

/**
 * Contains the initial
 * state of the Counter module.
 * It must be a simple object
 * with scalar values.
 */
export const state = {
  amount: 0,
}

/**
 * Display the module on the screen.
 * It is a simple function component
 * wich takes the module state inside
 * their props and display a counter.
 */
export const View = ({ amount }) => {
  return (
    <div className="Counter">
      <p>The counter amount is {amount}</p>
      <button>Increment</button>
      <button>Decrement</button>
    </div>
  )
}
```

We will see later on how to _increment_ and
_decrement_ a counter. For the moment
let's try to display this module.

## Create a Store

When working with **ReactivR** and like redux
you have to create a store. Store
is the core of **ReactivR**. This little guy
will handle state changement, actions and
effects production in our entire react
application.

```jsx
// src/Store.js
// This is how we import a module
import * as Counter from './Counter'
import { createStore } from 'reactivr'

/**
 * Creates the application store. You just
 * have to specify your application
 * reactive modules inside the modules key
 * of the store options.
 *
 * The store will collect modules and generate
 * the module state and interaction for us.
 */
export const store = createStore({
  modules: [Counter],
})
```

## Setup a Provider

Now we have a store, the next step is to plug
this store into our react application. To
realise that operation, **ReactivR** is using
a react component : **Provider**

```jsx
import React from 'react'
import { store } from './Store'
import { Provider } from 'reactivr'

/**
 * Let's display a simple application
 */
export default function App() {
  return (
    <Provider store={store}>
      <p>Your application component goes here</p>
    </Provider>
  )
}
```

## Render a module

In **ReactivR** each modules can be rendered on
the screen using the **Render** component :

```jsx
import React from 'react'
import { store } from './Store'
import * as Counter from './Counter'
import { Provider, Render } from 'reactivr'

/**
 * Let's display a simple application
 */
export default function App() {
  return (
    <Provider store={store}>
      <p>Your application component goes here</p>
      {/* display the counter on screen */}
      <Render state={Counter} />
    </Provider>
  )
}
```
