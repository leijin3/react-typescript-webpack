import './../assets/scss/App.scss'

import React from 'react'

import {hot} from 'react-hot-loader'

import reactLogo from './../assets/img/react_logo.svg'

class App extends React.Component<Record<string, unknown>, undefined> {
  public render() {
    return (
      <div className="app">
        <h1>Hello World!</h1>
        <p>Foo to the bar</p>
        <img src={reactLogo.default} height="480" />
      </div>
    )
  }
}

declare let module: Record<string, unknown>

export default hot(module)(App)
