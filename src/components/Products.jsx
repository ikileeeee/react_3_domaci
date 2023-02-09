import React from 'react'
import SingleProduct from './SingleProduct'
import {BsSearch} from "react-icons/bs";
import $ from "jquery";
import NavBar from './NavBar';


function Products({products, dodaj, izbaci, pretrazi}) {
  return (
    
    <div className="homepage">
      <div className="pretrazi">
           <div className="pretraziPolje">
             <input type="text"
                placeholder='Cena...'
                name="pretrazi"
                id="pretrazi"
              ></input>
            <div className="btnP" onClick={()=> pretrazi($("#pretrazi").val())}>
              <h3><BsSearch/></h3>
            </div>
  
            </div>
        </div>
      {products.map((product)=>{
        return (
          <SingleProduct
            product={product}
            key={product.id}
            dodaj={dodaj}
            izbaci={izbaci}
            flag ={1}
            />
        );
      }
      )

      }
      
    </div>
  )
}

export default Products
