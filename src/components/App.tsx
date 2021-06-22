import './../assets/scss/App.scss'

import * as React from 'react'

import {hot} from 'react-hot-loader/root'

import reactLogo from './../assets/img/react_logo.svg'

const App = () => {
  return (
    <div className="app">
      <h1>Hello World!</h1>
      <p>Foo to the bar</p>
      <img src={reactLogo} height="480" />
    </div>
  )
}

export default hot(App)
