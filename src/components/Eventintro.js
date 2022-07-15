import React, { Component } from 'react'

export default class Eventintro extends Component {
    render() {
        return (
            <>
                <div className='eintro'>
                    <h1>Level Up Renaissance Test By Programming Pathashala</h1>
                    <p style={{ fontSize: '24px', padding: '20px 5px 0px 5px', color: '#505050' }}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                        
                    <div className='container' style={{ fontSize: '20px', color: 'black' ,fontWeight:'600',marginTop:'40px'}}>
                        <div className='row'>
                            <div className='col'><img alt='cal' src='/images/calender.png' width={'25px'} height={'25px'}/>  Starts On: May 28, 2021 2:54 PM </div>
                            <div className='col'><img alt='clock' src='/images/clock.png' width={'25px'} height={'25px'}/>  Duration: 1 hour 20 minutes</div>
                            <div className='col'><img alt='location' src='/images/location.png' width={'30px'} height={'30px'}/>  Venue: Online</div>
                        </div>
                        <div className='row'>
                            <div className='col-3'>
                                <button className='reg2' style={{ width: '230px', height: '50px' }}>Register Now</button>
                            </div>
                            <div className='col-3' style={{ margin: '10px 0px 0px -40px', top: '40px' }} >
                                <img alt='people' src='/images/people.png' width={'35px'} height={'25px'} style={{ position: 'relative', top: '-3px',left:'-10px' }}/> <b>190+</b> people partcipating
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
