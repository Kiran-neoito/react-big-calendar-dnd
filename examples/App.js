import React from 'react'
import { render } from 'react-dom'
import localizer from 'react-big-calendar/lib/localizers/globalize'
import globalize from 'globalize'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import 'react-big-calendar/lib/sass/styles.scss'
import './styles.scss'
import './prism.scss'
import Dnd from './demos/dnd'

const globalizeLocalizer = localizer(globalize)

const DEFAULT_EXAMPLE = 'dnd'

class Example extends React.Component {
  constructor(...args) {
    super(...args)

    this.state = {
      selected: DEFAULT_EXAMPLE,
    }
  }

  select = selected => {
    this.setState({ selected })
  }

  componentDidMount() {
    const hash = (window.location.hash || '').slice(1)
    this.select(hash || DEFAULT_EXAMPLE)
  }

  render() {
    let selected = this.state.selected
    let Current = {
      dnd: Dnd,
    }[selected]

    return (
      <div className="app">
        <div className="example">
          <Current localizer={globalizeLocalizer} />
        </div>
      </div>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  render(<Example />, document.getElementById('app'))
})
