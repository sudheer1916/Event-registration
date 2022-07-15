import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaLinkedinIn, FaFacebook} from 'react-icons/fa';
// import {Card} from 'react-bootstrap'



export default class Aboutevent extends Component {
    render() {
        return (
            <>
                <div className='abtevent'>
                    <h1>About Event</h1>
                    <p style={{ fontSize: '27px', padding: '20px 6px 0px 6px', color: '#505050' }}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                    <h1>Learning Outcomes</h1>
                    <div>
                        <Container className='abtcont'>
                            <Row className="justify-content-md-center" style={{ position: 'relative', margin: '50px 10px 10px 10px' }} >
                                <Col md='auto'><img alt='hat' src='/images/hat.png' width='40' height='40' style={{ position: 'relative', top: '15px' }} /></Col>
                                <Col xs lg="2" md>Master Problem Solving,Data Structures and Algorithms</Col>
                                <Col md='auto'><img alt='network' src='/images/groupnet.png' width='40' height='40' style={{ position: 'relative', top: '15px' }} /></Col>
                                <Col xs lg="2">Win a chance to give Mock Interviews and Get Referrals.</Col>
                                <Col md='auto'><img alt='star' src='/images/star.png' width='40' height='40' style={{ position: 'relative', top: '15px' }} /></Col>
                                <Col xs lg="2">Rated 4.9/5.0 classroom experience by 1000+ students</Col>
                            </Row>
                            <Row className="justify-content-md-center" style={{ position: 'relative', margin: '50px 10px 30px 10px' }}>
                                <Col md='auto'><img alt='assignhat' src='/images/asshat.png' width='40' height='40' style={{ position: 'relative', top: '5px' }} /></Col>
                                <Col xs lg="2">Get a taste of MAANG Online Assessments.</Col>
                                <Col md='auto'><img alt='assignhat' src='/images/asshat.png' width='40' height='40' style={{ position: 'relative', top: '5px' }} /></Col>
                                <Col xs lg="2">Get a taste of MAANG Online Assessments.</Col>
                            </Row>
                        </Container>
                    </div>
                    <div style={{ margin: '30px 0px 10x 0px' }}>
                        <div >
                            <button className='reg2' style={{ width: '230px', height: '50px', position: 'relative', top: '60px', left: '540px' }}>Register Now</button>
                        </div>
                        <div className='col-3' style={{ margin: '10px 0px 100px -40px', position: 'relative', top: '100px', left: '550px', fontSize: '20px', font: 'Poppins' }} >
                            <img alt='people' src='/images/people.png' width={'35px'} height={'25px'} style={{ position: 'relative', top: '-3px', left: '-10px' }} /> <b>190+</b> people partcipating
                        </div>
                    </div>
                    <div style={{position : 'relative',top:'40px' ,margin:'50px 0'}}>
                        <span><a href='https://www.linkedin.com/school/programming-pathshala/'><FaLinkedinIn size={'40px'} color='#8A8A8D' style={{position : 'relative',margin:'15px'}}/></a></span>
                        <span><a href='https://www.facebook.com/Programmingpathshala.1'><FaFacebook size={'45px'} color='#8A8A8D' style={{position : 'relative',margin:'15px'}}/></a> </span>
                    </div>
                    <div style={{position:'relative', marginBottom:'-1200px'}}></div>


                </div>
            </>
        )
    }
}
