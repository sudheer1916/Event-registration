import React, { Component } from 'react'
// import Slides from './Slides'
import { Carousel } from 'react-bootstrap'

export default class Stories extends Component {
    render() {
        return (
            <div className='ost'>
                <h5 style={{ fontSize: '25px', color: '#444BAB' }}>Our Success Stories</h5>
                <p style={{ fontSize: '35px', color: '#4F516B' }}>What our students say about us</p>
                <Carousel variant="dark">
                    <Carousel.Item>
                        <img className="d-block w-100" src="/images/slidebg.png" alt="First slide" />
                        <Carousel.Caption>
                        <img className='gp' alt='pic' src='/images/girl.png'/>
                        <img className='qp' alt='pic' src='/images/quote.png'/>
                            <div className='fd'>
                                <table></table>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                <div style={{fontWeight:'600',marginTop:'50px',marginBottom:'10px'}}>Ashley.h <img alt='linkedin' src='/images/linkedin.jpg'/></div>
                                <p>Software Engineer at Amazon</p>
                                
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/images/slidebg.png" alt="First slide" />
                        <Carousel.Caption>
                        <img className='gp' alt='pic' src='/images/sai.jpeg' style={{borderRadius:'100px'}}/>
                        <img className='qp' alt='pic' src='/images/quote.png'/>
                            <div className='fd'>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                <div style={{fontWeight:'600',marginTop:'50px',marginBottom:'10px'}}>Ashley.h <img alt='linkedin' src='/images/linkedin.jpg'/></div>
                                <p>Software Engineer at Amazon</p>
                                
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/images/slidebg.png" alt="First slide" />
                        <Carousel.Caption>
                        <img className='gp' alt='pic' src='/images/girl.png'/>
                        <img className='qp' alt='pic' src='/images/quote.png'/>
                            <div className='fd'>
                                <table></table>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                <div style={{fontWeight:'600',marginTop:'50px',marginBottom:'10px'}}>Ashley.h <img alt='linkedin' src='/images/linkedin.jpg'/></div>
                                <p>Software Engineer at Amazon</p>
                                
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <button className='rmsb' style={{left: '670px',margin:'20px 0'}}>Read More Stories</button>
            </div>
        )
    }
}
