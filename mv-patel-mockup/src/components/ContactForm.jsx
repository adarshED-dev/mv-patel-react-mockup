import React from 'react'

function ContactForm() {
  return (
    <section className="main-section--contact-form p-[20px] bg-[#041120]">
        <div className="inner-section--wrapper">
            <div className="form-blocks--wrapper flex">
                <div className="contact--form-block">
                    <div className="form input-wrappers">
                        <div className="form-richtex">
                            <h2 className="form-heading">Send Us a Message</h2>
                            <p className="form-description">Fill in the form below and we'll get back to you shortly.</p>
                        </div>
                        <div className="form-main">
                            <form action="#" className="contact_form_main">
                                <div className="input-wrapper">
                                    <input type="text" className="input-name" name="full-name" placeholder="Full Name" />
                                    <input type="email" className="input-email" name="email" placeholder="Email" />
                                </div>
                                <div className="input-full">
                                    <input type="tel" name="phone" className="input-phone" placeholder="Phone" />
                                </div>
                                <div className="input-full">
                                    <input type="text" name="subject" className="input-subject" placeholder="Subject" />
                                </div>
                                <div className="input-full-text-area">
                                    <textarea name="your-message" className="input-message" placeholder="Your Message"></textarea>
                                </div>
                                <div className="input-form-button">
                                    <input type="submit" value="Send Message" className="input-submit button tertiary-button" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="contact--detail-blocks">
                    <div className="contact-blocks--wrapper">
                        <ul className="details-list">

                            <li className="detail-block block-list-li">
                                <div className="detail-wrapper">
                                    <div className="detail-icon">
                                        <img src="" alt="" className="icon-img--detail" />
                                    </div>
                                    <div className="detail-content">
                                        <h4 className="detail--heading">Visit Our Office</h4>
                                        <p className="detail--content">123, ABC Road, Vijay Nagar, Indore, Madhya Pradesh 452010, India</p>
                                    </div>
                                </div>
                            </li>
                            <li className="detail-block block-list-li">
                                <div className="detail-wrapper">
                                    <div className="detail-icon">
                                        <img src="" alt="" className="icon-img--detail" />
                                    </div>
                                    <div className="detail-content">
                                        <h4 className="detail--heading">Call Us</h4>
                                        <p className="detail--content">+91 98798 75768 <br />+91 90856 74897</p>
                                    </div>
                                </div>
                            </li>
                            <li className="detail-block block-list-li">
                                <div className="detail-wrapper">
                                    <div className="detail-icon">
                                        <img src="" alt="" className="icon-img--detail" />
                                    </div>
                                    <div className="detail-content">
                                        <h4 className="detail--heading">Email us</h4>
                                        <p className="detail--content">hello@mvpatelandco.com <br />info@mvpatelandco.com</p>
                                    </div>
                                </div>
                            </li>
                            <li className="detail-block block-list-li">
                                <div className="detail-wrapper">
                                    <div className="detail-icon">
                                        <img src="" alt="" className="icon-img--detail" />
                                    </div>
                                    <div className="detail-content">
                                        <h4 className="detail--heading">Business Hours</h4>
                                        <p className="detail--content">Mon - Sat: 10:30 AM - 8:00 PM <br />Sunday: 11:00 AM - 6:00 PM</p>
                                    </div>
                                </div>
                            </li>
                            <li className="detail-block block-list-li">
                                <div className="detail-wrapper">
                                    <div className="detail-icon">
                                        <img src="" alt="" className="icon-img--detail" />
                                    </div>
                                    <div className="detail-content">
                                        <h4 className="detail--heading">Follow Us</h4>
                                        <div className="social-icons flex w-full justify-left gap-[1rem] my-[10px]">
                                            <li className="icons icon-instagram list-none">
                                                <i class="fa-brands fa-instagram"></i>
                                            </li>
                                            <li className="icons icon-facebook list-none">
                                                <i class="fa-brands fa-facebook"></i>
                                            </li>
                                            <li className="icons icon-pinterest list-none">
                                                <i class="fa-brands fa-pinterest"></i>
                                            </li>
                                            <li className="icons icon-youtube list-none">
                                                <i class="fa-brands fa-youtube"></i>
                                            </li>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactForm