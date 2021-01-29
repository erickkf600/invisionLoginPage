
import Carousel from 'react-elastic-carousel'
import image from './../../assets/images/Data.png'
const CarouselInfo = ()  =>{
    let resetTimeout: any;
    return(
        <section className="welcome">
            <div className="welcome__image">
                <img src={image} alt="Illustration Invision" className="welcome__image-img"/>
            </div>
            <Carousel 
                isRTL={false} 
                itemsToShow={1} 
                showArrows={false}
                enableAutoPlay={true} 
                autoPlaySpeed={10000}>
                <div className="welcome__slide">
                    <p className="welcome__slide-title">Marcenas mattis egestas</p>
                    <p className="welcome__slide-text">Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta.</p>
                </div>
                <div className="welcome__slide">
                    <p className="welcome__slide-title">Marcenas mattis egestas</p>
                    <p className="welcome__slide-text">Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta.</p>
                </div>
            </Carousel>
        </section>
    )
}

export default CarouselInfo
