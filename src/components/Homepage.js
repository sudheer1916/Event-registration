import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Intro from './Intro';
import Events from './Events';
import Stories from './Stories';
import Footer from './Footer';
import Emailbox from './Emailbox';

export default class Homepage extends Component {
    render() {
        return (
            <div>
                <Intro />
                <Events />
                <Stories />
                <Emailbox/>               
                <Footer />
            </div>
        )
    }
}
