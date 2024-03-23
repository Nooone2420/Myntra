import React, { useEffect, useState } from 'react'

function Itemdescription({data}) {
    
  

    const [clickImage, setClickImage]=useState();

    // useEffect(()=>{
    //     data.filter((items)=>items._id==='64b25521aca893a283ecf356').map((item)=>{
    //         setClickImage(item.image1)

    //         console.log(clickImage)
    //     })
    // },[])
   
        
        
    
    function changeImage(e){
        const newImage= e.target.src
        setClickImage(newImage);
    }


    return (
        <div className='itemdescdiv'>
           
            {
                data.filter((items)=>items._id==='64b25521aca893a283ecf356').map((item)=>(
                    <div style={{display:'flex'}}>
                        <div className="leftdescdiv">
                            <div className="prdctimg">
                                <img src={clickImage} alt="" className='mainimage' />
                                <div className="verticalimg">
                                    <img src={item.image1} alt="" onClick={changeImage}/>
                                    <img src={item.image2} alt=""  onClick={changeImage}/>
                                    <img src={item.image3} alt=""  onClick={changeImage}/>
                                    <img src={item.image4} alt=""  onClick={changeImage}/>
                                </div>
                            </div>
                                
                           
                        </div>

                        <div className="rightdescdiv">
                            <p className='idcategory'>Category: <span className='idcategoryspan'>{item.category}</span></p>
                            <p className='idsoldby'>{item.soldby}</p>
                            <p className="idtitle">{item.title}</p>
                            <p className='idprice'>${item.price}&nbsp;<span>10% Off</span></p>
                            <p className="idmrp">${(item.price)-7.65}</p>
                            <p className='idtext'>Inclusive of all taxes</p>
                            <p className='idselectsize'>Select size</p>
                            <div className="sizesdiv">
                                <div className="size">
                                    <p className='sizevalue'>XS</p>
                                </div>
                                <div className="size">
                                    <p className='idsizevalue'>S</p>
                                </div>
                                <div className="size">
                                    <p className='idsizevalue'>M</p>
                                </div>
                                <div className="size">
                                    <p className='idsizevalue'>L</p>
                                </div>
                                <div className="size">
                                    <p className='idsizevalue'>XL</p>
                                </div>
                                <div className="div">
                                    <button className='atbbtn'>Add to Bag</button>
                                    <button className='wsbtn'>Whislist</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
 }

export default Itemdescription
