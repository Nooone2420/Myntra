import React, { useState } from 'react'
import Leftfilter from './Leftfilter'


function Mens({data}) {

    // const[id,setId]=useState()
    
    
    return (
        <div className='shopdiv'>
        {/* <div className="whitediv"></div> */}
        <Leftfilter/>

        <div className='rightdiv'>
            {
                
                    <div className='itemlistdiv'>
                         {
                       data.filter((items=>items.category==="Mens")).map((item)=>(
                                <div className='item'>
                                    <img src={item.image1} alt="" className='itemimage'/>
                                    <div className="like"><img src="" alt=""/></div>
                                    <p className='soldby'>{item.soldby}</p>
                                    <p className='title'>{item.title.slice(0,60)}...</p>
                                    <p className='price'>${item.price}</p>
                                </div>
                            ))
                         }

                    </div>
                
            }
            

            
        </div>
        </div>
        
    )
}

export default Mens
