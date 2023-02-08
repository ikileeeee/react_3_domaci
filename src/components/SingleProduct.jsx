import React from 'react'
import {BsPlusLg, BsDashLg} from "react-icons/bs";
import images from './Images';

function SingleProduct({product, dodaj, izbaci}) {
  return (
    <div className="singleProduct">
        <div className="naziv">{product.naziv}</div>
        <img src={images[product.imgIndex]} alt="Images" className='image'/>
        <div className="opis">{product.opis}</div>
        <div className="button" onClick={()=>dodaj(product.id)}>
            <BsPlusLg/>
        </div>
        <div className="button" onClick={()=>izbaci(product.id)}>
            <BsDashLg/>
        </div>
    </div>
  )
}

export default SingleProduct
