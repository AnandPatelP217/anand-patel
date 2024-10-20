import React from 'react';
import "../../stylesheets/Footer.css";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="new_footer_area bg_color">
      <div className="new_footer_top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s">
                <h3 className="f-title f_600 t_color f_size_18">Get in Touch</h3>
                <p>Don’t miss any updates of our Portfolio</p>
                <form action="#" className="f_subscribe_two mailchimp" method="post" noValidate>
                  <input type="text" name="EMAIL" className="form-control memail" placeholder="Email" />
                  <button className="btn btn_get btn_get_two" type="submit">Subscribe</button>
                  <p className="mchimp-errmessage" style={{ display: 'none' }}></p>
                  <p className="mchimp-sucmessage" style={{ display: 'none' }}></p>
                </form>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s">
                <h3 className="f-title f_600 t_color f_size_18">Download</h3>
                <ul className="list-unstyled f_list">
                  <li><NavLink to="/">Home</NavLink></li>
                  <li><NavLink to="/">about</NavLink></li>
                  <li><NavLink to="/">Projects</NavLink></li>
                  <li><NavLink to="/">Certificates</NavLink></li>
                  <li><NavLink to="/">ContactUs</NavLink></li>
                  <li><NavLink to="/">Profile</NavLink></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.6s">
                <h3 className="f-title f_600 t_color f_size_18">Help</h3>
                <ul className="list-unstyled f_list">
                  <li> <NavLink to="/contactus">Contact Us</NavLink></li>
                  
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="f_widget social-widget pl_70 wow fadeInLeft" data-wow-delay="0.8s">
                <h3 className="f-title f_600 t_color f_size_18">Social Links</h3>
                <div className="f_social_icon">
                  <a href="https://www.linkedin.com/in/anand-patel-p217/" className="fab fa-linkedin"></a>
                  <a href="https://github.com/AnandPatelP217" className="fab fa-github"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_bg">
          <div className="footer_bg_one"></div>
          <div className="footer_bg_two"></div>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-7">
              <p className="mb-0 f_400">Inc.. 2024 All rights reserved.</p>
            </div>
            <div className="col-lg-6 col-sm-5 text-right">
              <p>Made by <i className="icon_heart"></i> in <a href="#" target="_blank" rel="noopener noreferrer">ANAND PATEL</a></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
