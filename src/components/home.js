import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMousePointer, faDownload, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


import Router from './router';

class Home extends Component {
 
  render () {
 
    return (
      <div className='container'>

<content className = "mycontent"/>

{/* Always shows a header, even in smaller screens. */}
<div style={{height: '50px', position: 'relative'}}>
                <Link to="/Router"></Link>
</div>
        <div className='heading'>
          <p className='mx-auto'>Prepare your resume</p>
          <br/>

          <Link to='/theme-selection' className='btn btn-lg build-now'>
           Here
          </Link>
        </div>
        <div className='row'>
          <div className='instruction col-md-4 content mx-auto text-center mt-4'>
            <p>
              <FontAwesomeIcon icon={faMousePointer} />&nbsp; Choose a Theme
            </p>
            <p>
              <FontAwesomeIcon icon={faInfoCircle} />&nbsp; Enter Details
            </p>
            <p>
              <FontAwesomeIcon icon={faDownload} />&nbsp; Download PDF
            </p>
          </div>
          
          <Router/>
        </div>
    <style>
          {`
            .instruction p {
              font-size: 30px;
              width: 300px;
              display: flex;
              border-radius: 5px;
              align-items: center;
              color: #26547C;
            }
            

            .instruction {
              margin-top: 50px !important;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
            }
          `}
        </style>
      </div>
    )
  }
}

export default Home
