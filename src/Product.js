import { Component } from "react";
import './Product.css';
   
  
 class Product extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items:[],
            isLoaded: false
        }

    }

    componentDidMount(){
        fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                items: json
            })
        })
    }
 render(){
     var {isLoaded, items} = this.state;
     if (!isLoaded) {
         return <div>loading</div>
     }
     else {
    return (
 
       
      <ul className="boxFlex"> 
       
         {items.map(item => {
             return(
            <div key={item.id} className="box">
                <div>
                <img src={item.image} className="image" alt="image" /> 
                </div>

                <div className="boxWord">
                    <div className="title"
                    
                    >
                        {item.title}
                    </div>
                    <div>
                        ${item.price}
                    </div>
                </div>
                
                <div className="buyButton"><a>Buy Now</a></div>
            </div>
             )
    })}

    </ul> 
  
    )}
  }}
  
  export default Product;