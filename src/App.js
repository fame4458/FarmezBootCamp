import React, { Fragment } from 'react'
import './App.css'
import Hero from './components/Hero'
import Main from './components/Main'
import Nav from './components/Core/Nav'
import Project from './components/Project'
import News from './components/News'

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Nav />
        <section>
          <Hero />
        </section>
        <section>
          <Main />
        </section>
        <section>
          <Project />
        </section>
        <section>
          <News />
        </section>
      </Fragment>
    )
  }
}

export default App
