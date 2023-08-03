import React from "react"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Newsletter - Stay tune and get the latest update</h1>
            <span>Far far away, behind the word mountains</span>
          </div>
          <div className='right row'>
            <input type='text' placeholder='Enter email address' />
            <i className='fa fa-paper-plane'></i>
          </div>
        </div>
      </section>
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>Extreme Leverage Ltd</h1>
            <span>Unlocking Success Together: Enabling Excellence </span>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>

            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>

          </div>
          <div className='box link'>
            <h3>Explore</h3>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
              <li>Contact Us</li>
              <li>Team</li>
              <li>Location</li>
            </ul>
          </div>

          <div className='box last'>
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                Seasoned Woman Center Owashika Road,
                Lavington Nairobi, Kenya
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                +254718002145 - Marion Kago
                +254721215721 - Evah Mwai
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                marionkago@extremeleverage.co.ke
                evahmwai@extremeleverage.co.ke
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2023 All rights reserved Extreme Leverage Ltd
        </p>
      </div>
    </>
  )
}

export default Footer
