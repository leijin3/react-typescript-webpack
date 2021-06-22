import * as React from 'react'
import './assets/scss/App.scss'

import App from './components/App'
import {render} from 'react-dom'

const rootEl = document.getElementById('root')

render(<App />, rootEl)
