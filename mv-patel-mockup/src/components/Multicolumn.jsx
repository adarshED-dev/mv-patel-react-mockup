import React from 'react'

function Multicolumn({multicolumnDet}) {
  return (
    <main className="main-section--multicolumn p-[20px] bg-[#081B33]">
        <div className="main-section--inner">
            <div className="inner-multicolumn flex wrapper-multicolumn">
                {multicolumnDet.map((multicolumn)=>(
                    <div className="multicolumn-card">
                        <div className="card-inner-wrapper">
                            <div className="card-image--wrapper">
                                <img src={multicolumn.image} alt="" className="card-img" />
                            </div>
                            <div className="card-content--wrapper">
                                <div className="card-logo-image">
                                    <img src={multicolumn.logoImage} alt="" className="card-logo-img" />
                                </div>
                                <p className="card-subtext">{multicolumn.subtext}</p>
                                <p className="card-description description--multicolumn">{multicolumn.description}</p>
                                <a href={multicolumn.buttonURL1}>
                                    <button className="tertiary-button button">{multicolumn.buttonText1} <span className="iconArrow"></span></button>
                                </a>
                                <a href={multicolumn.buttonURL1}>
                                    <button className="primary-button button">{multicolumn.buttonText1} <span className="iconDownload"></span></button>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div className="bottom-full-catalogue--block">
            <div className="flex-wrapper full-cataglogue--brands">
                <div className="right-block content-box">
                    <div className="icon-full-cat">
                        <img src="" alt="" className="full-catalogue-image" />
                    </div>
                    <div className="icon-full-content">
                        <h3 className="full-cat-heading">Can't find what you're looking for?</h3>
                        <p className="full-cat-description">Download our complete catalogue for the full collection.</p>
                    </div>
                </div>
                <div className="left-block button-box">
                    <button className="download-full-catalogue-button">
                        Download Full Catalogue
                    </button>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Multicolumn