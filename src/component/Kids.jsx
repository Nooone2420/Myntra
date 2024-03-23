import React from 'react'
import Leftfilter from './Leftfilter'


function Kids({data}) {

    
    return (
        <div className='shopdiv'>

        <Leftfilter/>

        <div className="rightdiv">
            {
                
                    <div className='itemlistdiv'>
                         {
                       data.filter((items=>items.category==="KIDS")).map((item)=>(
                                <div className='item'>
                                    <img src={item.image1} alt="" className='itemimage'/>
                                    <p className='soldby'>{item.soldby}</p>
                                    <p className='title'>{item.title.slice(0,60)}...</p>
                                    <p className='price'>${item.price}</p>
                                </div>
                            ))
                         }

                    </div>
                
            }
            {/* <Next data={data} /> */}
            
        </div>
        </div>
    )
}

export default Kids
