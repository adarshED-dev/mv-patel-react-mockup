import video from '../assets/slideshow.mp4';


function HeroBanner(){
    return (
        <section className="banner-main main-banner w-full h-[100vh] overflow-hidden z-[9]">
            <div className="banner-video-wrapper w-full h-[100%] relative">
                <video width="100%" height="100%" muted="true" autoplay="true" loop="true">
                    <source src={video} type="video/mp4" />
                </video>
                <div className="overlay-content data-overlay--banner-main-content">
                    <h1 className="banner-overlay-heading uppercase mb-[20px]">Luxury <br /> Defined</h1>
                    <ul className="para-overlay flex w-auto gap-[1rem] justify-center mb-[20px]">
                        <li className="para-lists uppercase">Curated Bath</li>
                        <li className="para-lists uppercase">Tiles</li>
                        <li className="para-lists uppercase">Lightings</li>
                    </ul>
                    <br />
                    <div className="button-groups flex gap-[1rem]">
                        <button className="primary-button button uppercase cursor-pointer">Explore Brands</button>
                        <button className="secondary-button button uppercase cursor-pointer">Visit our showrooms</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroBanner