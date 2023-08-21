import React from 'react'
import PropTypes from 'prop-types'





export default function Navbar(props) {

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.pmode} bg-${props.pmode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">ConvertToLowerCase</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Features</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Pricing</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="/" >Disabled</a>
          </li>
        </ul>
        <div className={`form-check form-switch text-${props.pmode==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={props.Ronald} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >ChangeTheme</label>
</div>
      </div>
    </div>
  </nav>
  )
}
Navbar.propTypes={
  title:PropTypes.string};

  Navbar.defaultProps = {
    title: "enter you title here",
    
  }

