import {Link} from 'react-router-dom'

function Navbar() {


  

  return (
    <div className='navdiv'>
        <div className="navbar">
            <Link to='/'>
                <img src="Logo.png" alt="logo" className='logo'/>
            </Link>

            <div className="categorynavdiv">
                <Link to="Mens" style={{ textDecoration: 'none', color: "black" }} >
                    <p>MEN</p>
                </Link>
                <Link to="Womens" style={{ textDecoration: 'none' }}>
                    <p>WOMEN</p>
                </Link>
                <Link to="Kids" style={{ textDecoration: 'none' }}>
                    <p>KIDS</p>
                </Link>
                
                
                
            </div>
            
            <input type="text" className='searchbar' placeholder={'Search for Products, Brands and more'}/>

            
            <div className="nvbtns">
                <button className='navbtn'>
                    <Link to='Bag' style={{ textDecoration: 'none' }}>
                        <img src="bag.png" alt="" className='navbtnimg'/>
                        <p className="navbtntxt">Bag</p>  
                    </Link>
                </button>
                <button className='navbtn'>
                    <Link to='Wishlist' style={{ textDecoration: 'none' }}>
                        <img src="heart.png" alt="" className='navbtnimg'/><p className="navbtntxt">Wishlist</p>
                    </Link>
                </button>
                <button className='navbtn'>
                    <Link to='Profile' style={{ textDecoration: 'none' }}>
                        <img src="profile.png" alt="" className='navbtnimg'/><p className="navbtntxt">Profile</p>
                    </Link>
                </button>
            </div>

            

        </div>
        
        </div>
  )
}

export default Navbar

 
