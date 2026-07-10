import React from 'react'
import image from '../assets/logo.png'

function Footer() {
  return (
    <footer className='main-footer--parent bg-[#081B33]'>
        <div className="inner-footer--wrapper">
            <div className="upper-footer footer-up">
                <div className="footer-blocks-wrapper">
                    <div className="website-info">
                        <img src={image} alt="footer-logo-alt" width="100px" height="auto" />
                        <p className="website-desc-para">Curating the world's finest bath, tile and lighting brands for exceptional spaces.</p>
                        <div className="social-icons">
                            <li className="icons icon-instagram"></li>
                            <li className="icons icon-facebook"></li>
                            <li className="icons icon-pinterest"></li>
                            <li className="icons icon-youtube"></li>
                        </div>
                    </div>
                    <div className="footer-menu">
                        <h4 className="menu-block-heading">Menu</h4>
                        <ul className="menu-links--wrapper">
                            <li className="menu-link-element">
                                <a href="#">About Us</a>
                            </li>
                            <li className="menu-link-element">
                                <a href="#">Our Brands</a>
                            </li>
                            <li className="menu-link-element">
                                <a href="#">Outlets</a>
                            </li>
                            <li className="menu-link-element">
                                <a href="#">Gallary</a>
                            </li>
                            <li className="menu-link-element">
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-categories">
                        <h4 className="categories-block-heading">Categories</h4>
                        <ul className="menu-links--wrapper">
                            <li className="menu-link-element">
                                <a href="#">Bath Products</a>
                            </li>
                            <li className="menu-link-element">
                                <a href="#">Tiles</a>
                            </li>
                            <li className="menu-link-element">
                                <a href="#">Lights</a>
                            </li>
                            <li className="menu-link-element">
                                <a href="#">Other Products</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-visit">
                        <h4 className="visit-block-heading">Categories</h4>
                        <p className="visit-address">Indore, Madhya Pradesh <br /> India</p>
                        <br />
                        <a href="#" className="view-all-outlet">View All Outlets →</a>
                    </div>
                    <div className="footer-contact-block">
                        <h4 className="contact-block-heading">Contact</h4>
                        <div className="contact-blocks--wrapper">
                            <div className="contact-block--1">
                                +91 98989 98098
                            </div>
                            <div className="contact-block--2">
                                hello@mvpatelco.com
                            </div>
                            <div className="contact-block--3">
                                Mon - Sat: 10:00AM - 8:00PM
                            </div>
                            <div className="contact-block--4">
                                Sunday: 10:00AM - 8:00PM
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lower-footer footer-down px-[5rem] py-[10px] flex justify-between">
                <div className="copyright-text">©2026 MV patel & Co. All Right Reserved</div>
                <div className="footer-policies flex gap-[10px]">
                    <li className="privacy-policy policy-text list-none">Privacy Policy</li>
                    <li className="terms-condition policy-text list-none">Terms & Condition</li>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer