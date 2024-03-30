import React ,{useState}from 'react'

const ContextHooks = ({id, title, description, price,discountPercentage,rating,stock,brand,category,thumbnail,images, cart, setcart}) => {
    
   
    const [btntxt,setbtntxt]=useState("Add to Cart")
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
        <p>last updated 10 min ago</p>
        <div>----------------------------------------------------------</div>
       <div><h4>Original Price (1 item) :</h4></div>
       <div class='green'><h4>Discount Amount :</h4></div>
       <div><h4>Final Price (Price - Discount) :</h4></div>
       <div><h4>Sub-Total Amount (Final price * Quantity) :</h4></div>
       </div>

       <div class="grid-item">
        <h1 class='green'>${price}</h1>
        <br></br><br></br><br></br>
        <h2 class='green'>Discount Offer :{discountPercentage}%</h2>
        <br></br>
        <br></br>
        <button class="buttonstyle"  onClick={()=>{
                   btntxt=="Add to Cart"?setbtntxt("Remove cart"):setbtntxt("Add to Cart")
                   btntxt=="Add to Cart"?setcart(cart+1):setcart(cart-1)
                }}>
                    {btntxt=="Add to Cart"?"Add to Cart":"Remove cart"}</button>
            
        
        <br></br><br></br><br></br><br></br><br></br>
        
        <div>----------------------------------------------------------</div>
       <div><h4 >${price}</h4></div>
       <div><h4 class='green'>${price*discountPercentage/100}</h4></div>
       <div><h4 >${price-(price*discountPercentage/100)}</h4></div>
      <div>${(price-(price*discountPercentage/100))*(stock)}</div>
       </div>

        </div>
    </div>
    </>
)
}
export default ContextHooks
