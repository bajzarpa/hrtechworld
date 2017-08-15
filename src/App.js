import React, { Component } from 'react'
import './App.styl'

import Header from './components/Header'
import Selector from './components/Selector'
import Timeline from './components/Timeline'
import Textbox from './components/Textbox'
import Packages from './components/Packages'

import {
  selectorItems,
  timelineOptions,
  textboxText,
  packageOptions
} from './contents'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Selector items={selectorItems} />
        <Timeline options={timelineOptions} />
        <Textbox text={textboxText} />
        <Packages options={packageOptions} />
      </div>
    )
  }
}

export default App;
