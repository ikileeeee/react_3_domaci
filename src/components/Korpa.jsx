import React from 'react'
import Forma from './Forma';
import SingleProduct from './SingleProduct';
import '../Forma.css';


function Korpa({numProducts, products}) {

    function ukupanIznos(){
        var ukupno=0;
        products.forEach((product)=>{
            ukupno=ukupno+product.cena*product.kolicina;
        }
        );
        return ukupno;
    }
    if(numProducts===0){
        return (
            <div className="emptyCart">
                Korpa je prazna!
            </div>
        );
    }else{
        return(
        <div className="korpa">
            <div className="products">
               {products.map((product)=>{
                return <SingleProduct product={product}
                   key={product.id}
                   flag={0}
                 />
                })}
                </div>
                <div className="nov">
             <Forma
             numProducts={numProducts}
             ukupanIznos={ukupanIznos}
             />
             </div>
  </div>
            );   
        }
}

export default Korpa
