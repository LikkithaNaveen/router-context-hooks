import React from 'react'
import {products} from '../utlis/products'
import ContextHooks from './ContextHooks'

const ContextItems = ({cart,setcart}) => {
  return (
    <>
        <div>
            {
                products.map((element)=>(
                    <ContextHooks   {...element} cart={cart} setcart={setcart}/>
                ))
            }
        
        </div>
        </>
  )
}

export default ContextItems
