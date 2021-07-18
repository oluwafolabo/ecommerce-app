import logo from './logo.svg';
import profile from './profile.svg';
import cart from './Cart.svg';
import './Header.css';

function Header() {


 
  return (
    <div className="app">
      
        
      
      <nav>
      <div className="navbar">
          <span className="no1"></span>
            <span className="no2"></span>
            <span className="no3"></span>
        </div>
      <img src={logo} className="logo" alt="logo" />
        <div className="nav">
        
         <a href="#">HOME</a>
          <a href="#">BAGS</a>
         <a href="#">SNEAKER</a>
        <a href="#">BELT</a>
       <a href="#">CONTACT</a>
       <img src={cart} className="cart" alt="cart" /> 
        </div>
      </nav>
        
    </div>
  );
}

export default Header;
