import React from 'react'
import SingleProduct from './SingleProduct'

function Products({products, dodaj, izbaci}) {
  return (
    <div className='homepage'>
      {products.map((product)=>{
        return (
          <SingleProduct
            product={product}
            key={product.id}
            dodaj={dodaj}
            izbaci={izbaci}
            />
        );
      }
      )

      }
      
    </div>
  )
}

export default Products
