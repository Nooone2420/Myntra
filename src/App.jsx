import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './component/Home';
import Bag from './component/Bag';
import Wishlist from './component/Wishlist';
import Profile from './component/Profile';
import Navbar from './component/Navbar';
import { useEffect, useState } from 'react';
// import Men from './component/Shoplist'
import Womens from './component/Womens';
import Kids from './component/Kids';
import Mens from './component/Mens';
import Itemdescription from './component/Itemdescription';


function App() {
    const[data,setData]=useState([]);
    const[id,setId]=useState()
  
    
    function fetchdata(){
        fetch('https://real-blue-gosling-coat.cyclic.app/products')
        .then((res)=>res.json())
        .then((resp)=>setData(resp));
       
    }

    useEffect(()=>{
        fetchdata()
        console.log(data)
    }, [])
 

    
    return (
        <div>
            <Navbar/>

        

            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/Bag' element={<Bag/>}/>
                <Route path='/Wishlist' element={<Wishlist/>}/>
                <Route path='/Profile' element={<Profile/>}/>    
                {/* <Route path='/Itemlist' element={<Itemlist/>}/>  
                <Route path='/Shoplist' element={<Shoplist/>}/> */}
                <Route path='/Mens' element={<Mens data={data} setId={setId} />}/>  
                <Route path='/Womens' element={<Womens data={data}/>}/>  
                <Route path='/Kids' element={<Kids data={data}/>}/> 
                <Route path='/itemdescription' element={<Itemdescription data={data} id={id}/>}/> 
                
                
            </Routes>
            
            
            {/* <Home/> */}
        

        </div>
    );
}

export default App;
