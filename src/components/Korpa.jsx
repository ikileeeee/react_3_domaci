import React from 'react'

function Korpa({numProducts}) {
    if(numProducts===0){
        return (
            <div className="emptyCart">
                Korpa je prazna!
            </div>
        );
    }else{
        return <div>{numProducts}</div>
    }
}

export default Korpa
