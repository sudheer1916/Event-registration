import React, { Component } from 'react'

export default class Emailbox extends Component {
  render() {
    return (
      <div>
        <div className='ftd'  >
                    <h4 style={{ fontSize: '30px', color: '#4F516B' }}>Make Your Own Success Story!</h4>
                    <p style={{ fontSize: '20px', color: '#4359AF' }}>Start Your 7 Days Free Trial Now!</p>
                    <form>
                        <input class="introEmailInput" type="email" name="email" placeholder="Enter Email ID" required=""></input>
                        <button type="submit" class="introEmailSubmitButton"><h3 className='sft'>Start Free Trial</h3></button>
                    </form>
                </div> 
      </div>
    )
  }
}
