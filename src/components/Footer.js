import React, { Component } from 'react'
import { FaLinkedinIn, FaYoutube, FaFacebookF, FaInstagram, FaTelegramPlane} from 'react-icons/fa';

export default class Footer extends Component {
    render() {
        return (
            <div style={{position:'relative',flexDirection:'column'}}>
                < footer>
                <hr className='footerhr'/>
                    <div className='container'>
                        <div className='row' >
                            <div className='col-6 col-lg-5 mx-auto'  >
                                <h3 className='fh'>Want To know more about our courses?</h3>
                                <p style={{color:'#505050',fontSize:"20px",marginTop:'20px',marginBottom:'40px'}}>Let’s here all about it. <a href='#contacts' style={{fontSize:'20px',textDecoration:'underline'}}> Contact Us</a> </p>
                                <div className='row'>
                                    <div className='col-5'>
                                        <div ><a href='#home'><p>Home</p></a></div>
                                        <div><a href='#Renaissance'><p>Renaissance</p></a></div>
                                        <div><a href='#CourseCurriculum'><p>CourseCurriculum</p></a></div>
                                    </div>
                                    <div className='col-3'>
                                        <div><a href='#Pricing'><p>Pricing</p></a></div>
                                        <div><a href='#Stories'><p>Stories</p></a></div>
                                        <div><a href='#Blogs'><p>Blogs</p></a></div>
                                    </div>
                                    <div className='col-4'>
                                        <div><a href='#Teach with Us'><p>Teach with Us</p></a></div>
                                        <div><a href='#Get Scholarship'><p>Get Scholarship</p></a></div>
                                        <div><a href='#Terms & Conditions'><p>Terms&Conditions</p></a></div>
                                        <div><a href='#Careers'><p>Careers</p></a></div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-6 col-lg-5 mx-auto'>
                                <div className='flogo'><img alt="" src={"/images/bplogo.png"} width="40" height="40" />  Programing Pathshala</div>
                                <p style={{marginTop: '20px',marginBottom:'40px', fontSize:'20px'}}>We help our users to build skills, which are valued and enabling them to believe in themselves.</p>
                                <div className='row' style={{margin :'10px'}}>
                                    <div className='col-2 '>
                                        <a href='https://www.linkedin.com/school/programming-pathshala/'><FaLinkedinIn size={'30px'} color='#8A8A8D'/></a>
                                    </div>
                                    <div className='col-2 '>
                                       <a href='https://www.youtube.com/channel/UC4uPfwRHPbYlmjNMiKIdWNg'><FaYoutube size={'30px'} color='#8A8A8D'/></a>
                                    </div>
                                    <div className='col-2'>
                                        <a href='https://www.facebook.com/Programmingpathshala.1'><FaFacebookF size={'30px'} color='#8A8A8D'/></a>
                                    </div>
                                    <div className='col-2'>
                                        <a href='#https://www.instagram.com/programmingpathshala/'><FaInstagram  size={'30px'} color='#8A8A8D'/></a>
                                    </div>
                                    <div className='col-2 '>
                                        <a href='https://t.me/programmingpathshala'><FaTelegramPlane size={'30px'} color='#8A8A8D'/></a>
                                    </div>
                                    <div>
                                    <button className="chatBtn" ><img src='/images/group.png' alt="Submit" style={{marginRight:'20px'}}/> Chat with an Expert</button>
                                    </div>
                                    
                                </div>
                            </div>
                            <hr/>
                            <div>
                                <p style={{ textAlign: 'center' }}>All rights reserved with @Programming Pathshala</p>
                            </div>
                        </div>
                    </div>
                </footer >
            </div >
        )
    }
}
