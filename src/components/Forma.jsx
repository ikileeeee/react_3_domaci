import React from 'react'
import $ from "jquery";
import jQuery from 'jquery';

function Forma({ukupanIznos, numProducts}) {
    jQuery(function(){
        $("#form").on("submit", function(e){
            e.preventDefault();
            if(
                $("#ime").val() &&
                $("#prezime").val() &&
                $("#adresa").val() &&
                $("#email").val()
            ) {
                alert(
                    "Detalji vase poruđbine:\nIme: "+ $("#ime").val()+
                    "\nPrezime: "+$("#prezime").val()+
                    "\nAdresa: "+$("#adresa").val()+
                    "\nEmail: "+$("#email").val()+
                    "\n\nUkupan iznos: "+ukupanIznos()+" dinara"+
                    "\n\nBroj proizvoda: "+numProducts
                );
            }else{
                alert("Sva polja su obavezna!!!");
            }
        });
      });
      return (
<div className="for">
        <form action="." id="form">
            <h1 className='nazivForme'>Informacije o posiljki</h1>
            <div className="formaf">
                <label htmlFor="ime">Ime:</label>
                <input type="text" placeholder='Unesite vase ime...' name='ime' id='ime' />

                <label htmlFor="prezime">Prezime:</label>
                <input type="text" placeholder='Unesite vase prezime...' name='prezime' id='prezime' />

                <label htmlFor="adresa">Adresa:</label>
                <input type="text" placeholder='Unesite vasu adresu...' name='adresa' id='adresa' />

                <label htmlFor="email">Email:</label>
                <input type="text" placeholder='Unesite vas email...' name='email' id='email' />

                <div className="ukupanBroj">Ukupan broj proizvoda: {numProducts}</div>
                
                <div className="ukupnaCena">Ukupan iznos: {ukupanIznos()}</div>
                
                <input type="submit" className='submit' value="POSALJI"/>

            </div>
        </form>
        </div>
      )
}

export default Forma
