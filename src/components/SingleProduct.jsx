import React from 'react'
import {BsPlusLg, BsDashLg} from "react-icons/bs";
import images from './Images';

function SingleProduct({product, dodaj, izbaci, flag}) {
  return (
    <div className="homepage">
        <div className={flag === 1 ? "singleProduct" : "uKorpi"}>
        <div className="naziv">{product.naziv}</div>
        <img src={images[product.imgIndex]} alt="Images" className='image'/>
        {flag === 1 ? <div className="opis">{product.opis}</div> : <></>}

        <div className="butons">
            {flag===1 ? <> <div className="btn" onClick={()=>dodaj(product.id)}>
      
            <BsPlusLg/>
        </div>
        <div className="btn" onClick={()=>izbaci(product.id)}>
            <BsDashLg/>
        </div>
        </>:(<h4 className="kol">Kolicina:{product.kolicina}</h4>)}
    </div>
    </div>
    </div>
  )
}

export default SingleProduct
