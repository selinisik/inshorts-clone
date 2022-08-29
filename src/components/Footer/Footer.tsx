import React from 'react'
import './Footer.css'

export const Footer = () => {
  return (
    <div className='footer'>
        <span className='name'>
            Inshorts clone made by -{' '}
            <a href='' >
                Selin
            </a>
        </span>
        <hr style={{width:'90%'}}/>
        <div className='iconContainer'>
            <a href='www.linkedin.com/in/selinisik' target="__blank">
            <i className="fa-brands fa-linkedin fa-2x"></i>
            </a>
        </div>
        
    </div>
  )
}
