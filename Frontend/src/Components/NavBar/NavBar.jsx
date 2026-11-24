import './NavBar.css';
import searchIcon from'../../assets/searchIcon.png';
import shoppingCart from '../../assets/shoppingCart.png';
import logo from '../../assets/amazonIcon.png';
import hamburgerIcon from '../../assets/hamburgerIcon.png'
function NavBar(){
    return (
        <>
      <div className="nav-bar">
        <div className="nav-belt">
          <button className="nav-belt-logo">
            <img src = {logo}/>
          </button>
          <div className="nav-belt-search-bar">
            <input type="text" placeholder ="Search products" />

            <button className="nav-belt-search-icon">
                <img src = {searchIcon} />
            </button>

          </div>
          <button className="nav-belt-shopping-cart">
                <img src={shoppingCart}/>

          </button>
         
        </div>
        <div className="nav-main">
          <button className="nav-main-hamburger">
            <img src = {hamburgerIcon}/>
          </button>
          <button className="nav-main-div">
            <p className="nav-main-div-a">
            Categories
            </p>
          </button>
          <button className="nav-main-div">
            <p className="nav-main-div-a">
            Today's Deal
            </p>
          </button>
          <button className="nav-main-div">
            <p className="nav-main-div-a">
            Sell
            </p>
          </button>
          <button className="nav-main-div">
            <p className="nav-main-div-a">

            Coupouns
            </p>
          </button>
          
        </div>
     </div>
        </>
    )
}
export {NavBar};