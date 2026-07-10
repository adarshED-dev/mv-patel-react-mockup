import React from 'react'

function MultipleCardGrid({cardData}) {
    const card_data = cardData
  return (
    <section className="main-multiple--card-grid p-[20px] bg-[#041120]">
        <div className="section-inner-wrapper">
            <h2 className="card--grid-heading text-[#fff] text-center text-[20px] my-[2rem] uppercase">Our Showrooms</h2>
            <div className="main-card-grid card-showrooms flex items-center justify-between">
                {card_data.map((cd)=>(
                    <div className="main-card showroom-data w-[25%]">
                        <img src="" alt="" width="" height=""/>
                        <div className="card-overlay--content multiplecard-content">
                            <h3 className="showroom-title"></h3>
                            <p className="showroom-addr"></p>
                            <a href="#" className="get-direction uppercase text-center">Get Direction →</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default MultipleCardGrid