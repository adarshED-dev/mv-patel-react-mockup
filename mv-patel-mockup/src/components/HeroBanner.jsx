import video from '../assets/slideshow.mp4';


function HeroBanner({overlayData}){
    return (
        <section className="banner-main main-banner w-full h-[100vh] overflow-hidden z-[9]">
            <div className="banner-video-wrapper w-full h-[100%] relative">
                <video width="100%" height="100%" muted="true" autoplay="true" loop="true">
                    <source src={video} type="video/mp4" />
                </video>
                <div className="overlay-content data-overlay--banner-main-content">
                    {overlayData.subheading ? (<p className="subheading-content uppercase">overlayData.subheading</p>):null}
                    <h1 className="banner-overlay-heading uppercase mb-[20px]">{overlayData.heading}</h1>
                    <ul className="para-overlay flex w-auto gap-[1rem] justify-center mb-[20px]">
                        { overlayData.description ? (
                                <p className="description-content overlay-content">{overlayData.description}</p>
                            ) : (
                                <>
                                    <li className="para-lists uppercase">Curated Bath</li>
                                    <li className="para-lists uppercase">Tiles</li>
                                    <li className="para-lists uppercase">Lightings</li>
                                </>
                            )
                        }
                    </ul>
                    <br />
                    {overlayData.buttonAvailability ? (
                        <div className="button-groups flex justify-center gap-[1rem]">
                        <button className="primary-button button uppercase cursor-pointer">
                            <a href="/brands">
                                Explore Brands
                            </a>
                        </button>
                        <button className="secondary-button button uppercase cursor-pointer">
                            <a href="/outlets">
                                Visit our showrooms
                            </a>
                        </button>
                    </div>
                    ) : null}
                </div>
            </div>
        </section>
    )
}

export default HeroBanner