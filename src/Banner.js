import './Banner.css';
import banner from './banner.png';

function Banner() {
  return (
    <div className="app">
      <div className="background">

</div>
      
      <img src={banner} className="banner" alt="banner" /> 
       <h1 className="shoes">Our</h1>
       <h1 className="shoes1">Store</h1>
      <div className="OrderButton">
        <a className="OrderName">Order Now</a>
      </div>

      <div className="What">What we sell</div>
        
    </div>
  );
}

export default Banner;
