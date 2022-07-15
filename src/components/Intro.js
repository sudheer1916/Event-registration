import React, { useState, useRef, useEffect } from 'react'

import Navbarpro from './Navbar';
import { Link } from 'react-router-dom'


const Intro = () => {
  const Ref = useRef(null);
  const [timer, setTimer] = useState('00:00:00:00');
  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    const days = Math.floor((total / 1000 / 60 / 60 / 24) % 30);
    return {
      total, days, hours, minutes,
    };
  }
  const startTimer = (e) => {
    let { total, days, hours, minutes, }
      = getTimeRemaining(e);
    if (total >= 0) {
      setTimer(
        (days > 4 ? days : '0' + days) + ' : ' + (hours > 9 ? hours : ' 0 ' + hours) + ' : ' +
        (minutes > 9 ? minutes : '0' + minutes)
      )
    }
  }
  const clearTimer = (e) => {
    setTimer('03 : 00 : 00');
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000)
    Ref.current = id;
  }

  const getDeadTime = () => {
    let deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + 315000);
    return deadline;
  }
  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);
  return (
    <div>
      <header style={{position:'relative',flexDirection: 'column'}}>
        <Navbarpro></Navbarpro>
        <img alt='' src='/images/bg.jpg'></img>
        <div className='img1'><img alt='' src='/images/learn.png'></img></div>
        <div className='title1'><img alt="" src={"/images/bplogo.png"} width="40" height="40" /><p style={{ marginTop: '20px', marginLeft: '10px' }}>Programing Pathashala</p></div>
        <div className='txt'>Level Up Renaissance Test By Programming Pathashala</div>
        <div className='date'>22 Jan, 2021 | 7 PM IST | Online </div>
        <div className='txt1'><img alt='' src='/images/graduation-hat.png' />Get up to 100% Scholarships on Renaissance Course </div>
        <button className='reg1'><Link to="/events" style={{ textDecoration: 'none', color: 'black' }}>RegisterNow</Link></button>
        <div className='time'>
          <table>
            <tr>
              <td><p style={{ marginLeft: '400px', marginTop: '20px', fontSize: '40px' }}>Webinar Starts In</p></td>
              <td><div style={{ marginLeft: '30px', marginTop: '5px', fontSize: '40px' }}>{timer}</div></td>
              <div className='dhm'>
                <span style={{padding:'15px'}}>days </span>
                <span style={{padding:'15px'}}>hours</span> 
                <span style={{padding:'18px'}}>minutes</span>
              </div>
            </tr>
          </table>
        </div>
      </header>
    </div>
  )
}



export default Intro
