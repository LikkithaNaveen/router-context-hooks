import React ,{useContext,useState}from 'react'

const ContextHooks = ({id, title, description, price,discountPercentage,rating,stock,brand,category,thumbnail,images, cart, setcart,ratingstar}) => {
    
   
    const [btntxt,setbtntxt]=useState("Add to Cart")
    

    //handling increment when clicking the button
    const [quantity, setQuantity] = useState(1);

    const handleadd=()=>{
        setQuantity(quantity + 1);
    }

    const removeQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }
   
return (
    <>
    <div class='requireborder'>
       <div class='grid-container'>
       <div class="grid-item"><img src={images} class='shopposter'></img>
       </div>
       <div class="grid-item">
        <h1>{title}</h1>
        <h2><b>Brand:</b>{brand}</h2>
        <p>{description}</p>
        <h3>{category}</h3>
        <h3 class='stock'>{stock} Stock Avaliable</h3>
        <h3 class='green'>Rating:{rating}</h3>
        <div>{ratingstar}</div>
        <p>last updated 10 min ago</p>
        <div>----------------------------------------------------------</div>
       <div><h4>Original Price (1 item) :</h4></div>
       <div class='green'><h4>Discount Amount :</h4></div>
       <div><h4>Final Price (Price - Discount) :</h4></div>
       <div><h4>Sub-Total Amount (Final price * Quantity) :</h4></div>
       </div>

       <div class="grid-item">
        <h1 class='green'>${price}</h1>
        <button class="buttonadd"  onClick={() => {handleadd()}}>+</button>
        <span>      {quantity}  </span>
        <button class="buttonadd"  onClick={() => {removeQuantity()}}> -</button>
        <br></br><br></br>
        <h2 class='green'>Discount Offer :{discountPercentage}%</h2>
        <br></br>
        <br></br>
        <button class="buttonstyle"  onClick={()=>{
                   btntxt=="Add to Cart"?setbtntxt("Remove cart"):setbtntxt("Add to Cart")
                   btntxt=="Add to Cart"?setcart(cart+1):setcart(cart-1)
                }}>
                    {btntxt=="Add to Cart"?"Add to Cart":"Remove cart"}</button>
            
        
        <br></br><br></br><br></br><br></br><br></br> <br></br> <br></br><br/> 

        <div>----------------------------------------------------------</div>
        <div><h4 >${quantity*price}</h4></div>
       <div><h4 class='green'>${((quantity*price)*discountPercentage/100).toFixed(3)}  </h4></div>
       <div><h4 >${((quantity*price)-((quantity*price)*discountPercentage/100)).toFixed(3)}</h4></div>
      <div>${(((quantity*price)-((quantity*price)*discountPercentage/100))*(stock)).toFixed(3)}</div>
       </div>

        </div>
    </div>
    </>
)
}
export default ContextHooks
