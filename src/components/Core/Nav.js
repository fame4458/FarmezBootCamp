import React from 'react'
import styled from 'styled-components'

const Logo = styled.img`
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  display: block;
`

class Nav extends React.Component {
  render() {
    return (
      <div className='sticky-top'>
        <ul className="nav justify-content-center ">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              SERVICES
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              PORTFOLIO
            </a>
          </li>
          <li className="nav-item">
            <Logo src='static/img/logo.png'/>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              OUR NEWS
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
            CONTACT US
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Nav
