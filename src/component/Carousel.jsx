// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; 
// import { Carousel } from 'react-responsive-carousel';

// class DemoCarousel extends Component {
//     render() {
//         return (
//             <Carousel>
//                 <div>
//                     <img src="car1.webp" alt="carimg"/>
//                     <p className="legend">Legend 1</p>
//                 </div>
//                 <div>
//                     <img src="car1.webp" alt="carimg"/>
//                     <p className="legend">Legend 2</p>
//                 </div>
//                 <div>
//                     <img src="car1.webp" alt="carimg" />
//                     <p className="legend">Legend 3</p>
//                 </div>
//             </Carousel>
//         );
//     }
// };

// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));

// export default DemoCarousel

import React, { useEffect, useState } from 'react'


function Carousel() {

    // const images=[
    //     {src: 'car1.png', alt: 'car1'},
    //     {src: 'car2.png', alt: 'car2'},
    //     {src: 'car3.png', alt: 'car3'}
    // ];

    const slides=[
        {
            src: 'car1.png',
            txt1: 'BRAND NEW',
            txt2: 'COLLECTION',
            heading:'Calvin Klein',
            desc: 'Explore the new spring arrival of casual men and womens fit and receive amazing discounts and offers on your purchases.',
            btncolor: '#49262C',
            lightcolor: '#884E58',
            fdir: 'row-reverse'
        },

        {
            src: 'car3.png',
            txt1: 'OUR',
            txt2: 'TOP PICKS',
            heading:'Accessorize',
            desc: 'Explore the new spring arrival of casual men and womens fit and receive amazing discounts and offers on your purchases.',
            btncolor: '#5F5B39',
            lightcolor: '#7C774F',
            fdir: 'row-reverse'
        },

        {
            src: 'car2.png',
            txt1: 'NEWEST',
            txt2: 'ARRIVALS',
            heading:'Womens Wear',
            desc: 'Explore the new spring arrival of casual men and womens fit and receive amazing discounts and offers on your purchases.',
            btncolor: '#513A5E',
            lightcolor: '#815E96',
            fdir: 'row'
        },
        
    ];


   const[currentIndex, setCurrentIndex]=useState(0);

    const nextSlide=()=>{
        setCurrentIndex((currentIndex+1)%slides.length);
    }

    const prevSlide=()=>{
        setCurrentIndex((currentIndex-1+slides.length)%slides.length);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000);
    

        return () => clearInterval(interval);
    }, [currentIndex]);
    


    return (
        <div>
            <div className='cardiv' style={{flexDirection: slides[currentIndex].fdir}}>
                <img src={slides[currentIndex].src} alt="" className='carimg'/>   
                <div className="cartxt" style={{marginLeft: slides[currentIndex].fdir==='row'?'120px':'0'}}>
                    <div className="toptxt">
                        <p className='cartxt1'>{slides[currentIndex].txt1}</p>&nbsp;
                        <p className='cartxt2' style={{color: slides[currentIndex].lightcolor}}>{slides[currentIndex].txt2}</p>
                    </div>
                    <p className='carhdn' style={{color: slides[currentIndex].btncolor}}>{slides[currentIndex].heading}</p>
                    <p className='cardesc'>{slides[currentIndex].desc}</p>
                    <button className='carbtn' style={{backgroundColor: slides[currentIndex].btncolor}}>Shop</button>
                </div>
            </div>
            {/* <button className="prev" onClick={nextSlide}>Previous</button>
            <button className="nxt" onClick={prevSlide}>Next</button> */}
        </div>
  )
}

export default Carousel
