import React from 'react'
import { Card, } from 'react-bootstrap'

const Eventblogs = () => {
  return (
    <div className='eblog'>
      <h5 style={{ color: '#444BAB', fontWeight: 'bold', margin: '20px' }}>Our Blogs</h5>
      <h2 style={{ color: '#4F516B', fontWeight: 'bold', margin: '20px 0' }}>Read Our Blogs</h2>
      <p style={{ color: '#000000' }}>Inspiring and uplifting ideas which will help you feel positive about your career.</p>
      <div className='container-fluid d-flex justify-content-center'>
        <div className='row' style={{ marginTop: '20px' }}>
          <div className='col-md-4'>
            <Card style={{ width: '23rem', marginTop: '20px' }}>
              <Card.Img variant="top" src="/images/laptop.jpg" />
              <Card.Body>
                <Card.Title style={{ fontSize: '18px', color: '#4F516B', fontWeight: '600', margin: '20px' }}>Guide for an ultimate Tech Career</Card.Title>
                <Card.Text style={{ fontSize: '16px', color: '#5A5959', textAlign: 'left', width: '350px' }}>
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.....
                </Card.Text>
              </Card.Body>
            </Card>
          </div >
          <div className='col-md-4'>
            <Card style={{ width: '23rem', height: '31rem' }}>
              <Card.Img variant="top" style={{ padding: '30px 0' }} src="/images/logos.jpg" />
              <Card.Body>
                <Card.Title style={{ fontSize: '18px', color: '#4F516B', fontWeight: '600', margin: '10px 0px 20px 0px' }}> 10 Most Common Mistakes To Avoid While Preparing for FAANG Company Coding Interviews!</Card.Title>
                <Card.Text style={{ fontSize: '16px', color: '#5A5959', textAlign: 'left', width: '350px' }}>
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.....
                </Card.Text>
              </Card.Body>
            </Card>
          </div >
          <div className='col-md-4'>
            <Card style={{ width: '23rem', marginTop: '20px' }}>
              <Card.Img variant="top" src="/images/laptop1.jpg" />
              <Card.Body>
                <Card.Title style={{ fontSize: '18px', color: '#4F516B', fontWeight: '600', margin: '10px' }}>How to Ace your next Data Structures and Algorithms Interview?</Card.Title>
                <Card.Text style={{ fontSize: '16px', color: '#5A5959', textAlign: 'left', width: '350px' }}>
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout......
                </Card.Text>
              </Card.Body>
            </Card>
          </div >
        </div>
      </div>
      <button className='rmsb' style={{ marginBottom: '20px' }}>Read More Blogs</button>
      <div className='videobox'>
        <div className='container'>
          <p style={{ fontSize: '20px', color: '#444BAB' }}>Our Videos</p>
          <p style={{ fontSize: '36px', color: '#4F516B' }}>Watch Our Videos</p>
          <div className='row'>
            <div className='col-4'>
              <div style={{ margin: '30px' }}>
                <iframe style={{ borderRadius: '6px', height: '220px', width: '350px' }}
                  src="https://www.youtube.com/embed/CSoWVt6bbaQ"
                  frameborder="0"
                  allow="autoplay; encrypted-media"
                  allowfullscreen
                  title="video"
                />{" "}
              </div>
            </div>
            <div className='col-4'>
              <div style={{ margin: '30px' }}>
                <iframe style={{ borderRadius: '6px', height: '220px', width: '350px' }}
                  src="https://www.youtube.com/embed/qUwSQ2IEt_g"
                  frameborder="0"
                  allow="autoplay; encrypted-media"
                  allowfullscreen
                  title="video"
                />{" "}
              </div>
            </div>
            <div className='col-4'>
              <div style={{ margin: '30px' }}>
                <iframe style={{ borderRadius: '6px', height: '220px', width: '350px' }}
                  src="https://www.youtube.com/embed/G39ud7BTfUo"
                  frameborder="0"
                  allow="autoplay; encrypted-media"
                  allowfullscreen
                  title="video"
                />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Eventblogs















