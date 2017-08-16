import React, { Component } from 'react'
import './App.styl'

// Components
import Header from './components/Header'
import Selector from './components/Selector'
import Timeline from './components/Timeline'
import Textbox from './components/Textbox'
import Partners from './components/Partners'
import Footer from './components/Footer'

// Containers
import Packages from './components/Packages'

// Mock data
import {
  selectorItems,
  timelineOptions,
  textboxText,
  packageOptions,
  partnersContent
} from './contents'


/**
 * This in this form is not the right skeleton for the app
 * but i did not had any information about the functionality of
 * the "Selector" or the "Timeline" component.
 *
 * But perhaps those define which packages are visible, or which content
 * has to show instead of packages.
 * To refactor this to be a bit modular is a few extra hours
 */
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Selector items={selectorItems} />
        <Timeline options={timelineOptions} />
        <Textbox text={textboxText} />
        <Packages options={packageOptions} />
        <Partners items={partnersContent} />
        <Footer />
      </div>
    )
  }
}

export default App;
