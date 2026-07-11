import React from 'react'

function OutletCards({subtitleHeading, outletDet}) {
  return (
    <main className="main-section--outletCards p-[20px] bg-[#081B33]">
        <p className="subtitle-heading">{subtitleHeading}</p>
        <div className="main-section--inner">
            <div className="inner-multicolumn flex wrapper-multicolumn">
                {outletDet.map((outlet)=>(
                    <div className="multicolumn-card">
                        <div className="card-inner-wrapper">
                            <div className="card-image--wrapper">
                                <img src={outlet.image} alt="" className="card-img" />
                            </div>
                            <div className="card-content--wrapper">
                                <p className="card-count">{outlet.count}</p>
                                <h1 className="card-heading">{outlet.heading}</h1>
                                <p className="card-description">{outlet.description}</p>
                                <p className="card-timings">{outlet.timing}</p>
                                <p className="card-mobile">{outlet.mobile}</p>
                                <a href={outlet.buttonURL}>
                                    <button className="tertiary-button button">{outlet.buttonText} <span className="iconArrow"></span></button>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div className="bottom-full-map--block">
            <div className="full-screen--map map-full">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29442.413757674083!2d75.85895400787439!3d22.71702424921076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1783759695423!5m2!1sen!2sin"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="strict-origin-when-cross-origin"
                    />
                </div>
                <div className="overlay-map--content">
                    <p className="subheading--map-cont">Easy to React</p>
                    <h3 className="heading--map-cont">All Outlets in indore</h3>
                    <p className="description--map-cont">All our Showrooms are located across the city for your convenience.</p>
                    <a href="">
                        <button className="tertiary-button button">view on google maps</button>
                    </a>
                </div>
        </div>
    </main>
  )
}

export default OutletCards