import React, { Component } from 'react'
import Aboutevent from './Aboutevent'
import Emailbox from './Emailbox'
import Eventblogs from './Eventblogs'
import Eventintro from './Eventintro'
import Footer from './Footer'
import Intro from './Intro'
import Stories from './Stories'

export default class Eventpage extends Component {
  render() {
    return (
      <div>
        <Intro/>
        <Eventintro/>
        <Aboutevent/>
        <Stories/>
        <Eventblogs/>
        <Emailbox/>
        <Footer/>

      </div>
    )
  }
}

