import React from 'react'
import SingleProduct from './SingleProduct';

function Korpa({numProducts, products}) {
    console.log("Na stanju: "+numProducts);
    if(numProducts==0){
        return (
            <div className="emptyCart">
                Korpa je prazna!
            </div>
        );
    }else{
        
        console.log("Else");
        return products.map((product)=>{
            return (
                
                <SingleProduct product={product}
                key={product.id}
                flag={0}
                />
               
            );
            
        }
        
        
        )
        
        
        
    }

}

export default Korpa
