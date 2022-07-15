
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Events extends Component {

  render() {

    let data = [
      {
        image: '/images/img5.jpg'
      },
      {
        image: '/images/img3.jpg'
      },
      {
        image: '/images/img4.jpg'
      },
      {
        image: '/images/img2.jpg'
      }

    ]

    return (
      <div className='eventsData'>
        <div>
        <div><h2 style={{height : '80px', fontSize:'40px', fontWeight:'600', marginLeft:'10px',marginTop:'-50px'}}>Upcoming Events</h2></div>
          {
            data.map(function (Eventcontainer , index) {
              return (
                <div className='row' key={index}>
                  <div className='col'>
                    <img alt="logo" src={Eventcontainer.image} />
                  </div>
                  <div className='col'>
                    <p style={{ fontSize: '26px', width: '500px' }}>Level Up Renaissance Test By Programming Pathashala</p>
                    <p className='para' >It is a long established fact that a reader will be distracted by the readable.</p>
                    <div style={{marginTop: '40px'}}>
                      <table>
                        <tr>
                          <td><img alt="cal" src={"/images/calender.png"} /></td>
                          <td><p className='para1'>Jan 22, 2021</p></td>
                          <td><img className='clock' alt="cal" src={'images/clock.png'} /></td>
                          <td><p className='clockside'>7:20 PM IST</p></td>
                        </tr>
                      </table>
                    </div>
                    <div style={{marginTop: '-40px'}}>
                      <table>
                        <tr>
                          <td><button className='reg2'><Link to="/events" style={{ textDecoration: 'none', color: 'white' }}>Register Now</Link></button></td>
                          <td><img className='people' alt="cal" src={"/images/people.png"} /></td>
                          <td><p className='pep'>90+ people partcipating</p></td>
                        </tr>
                      </table>
                    </div>
                  </div>

                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

