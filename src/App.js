import { useState } from 'react';
import { BrowserRouter, Routes , Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Products from './components/Products';
import Korpa from './components/Korpa';

function App() {
  const [korpaProducts, setKorpaProducts]=useState([]);

  const [products]=useState([
    {
      id:1,
      naziv: "SCITEC Whey Protein čoko-lešnik",
      opis:"Protein iz surutke se smatra “kraljem” svih proteina za bodibilding jer ima najveću biološku vrednost. Protein iz surutke ima najbolji aminokiselinski profil i veću koncentraciju BCAA od bilo kog drugog proteinskog izvora. Aminokiselinski sastav ovog preparata zasniva se na tzv. anaboličkim aminokiselinama razgranatog lanca (BCAA, taurin). ",
      cena: 4000,
      imgIndex:0,
      kolicina:0,
    },
    {
      id:2,
      naziv: "ISO-100 Hydrolyzed Protein",
      opis:"Dymatize ISO-100 je savršeno instantizovan (lako se rastvara u vodi). Detaljna obrada Dymatize-ovog protein izolata iz surutke pruža vam instantnu rastvorljivost u svojoj pravoj formi. Pri proizvodnji je prošao kroz ni manje ni više nego 5 koraka kontrolisanja kvaliteta. Proteini su vrlo znacajni u ishrani, korisno ih je koristiti ako trenirate.",
      cena: 5000,
      imgIndex:1,
      kolicina:0,
    },
    {
      id:3,
      naziv: "Animal Whey",
      opis:"Protein je savršeno sredstvo za popunjavanje praznina između obroka, obezbeđujući koncentrisanu dozu najvažnijeg makronutrijenta za fizički aktivne ljude. Danas skoro svaki ozbiljni sportista koristi proteine surutke – pre podne, između obroka, posle treninga, pre spavanja. Sa ovako korisnim proizvodom za izgradnju mišića, mogućnosti su beskrajne.",
      cena: 3000,
      imgIndex:2,
      kolicina:0,
    },

  ]);
  function osveziKorpu(){
    setKorpaProducts(products.filter((product)=>product.kolicina>0));
    console.log(korpaProducts);
  }

  function dodaj(id){
    products.forEach((product)=>{
      if(product.id===id){
        console.log("Dodat je:"+ id);
        setKorpaProducts(korpaProducts+1);
        product.kolicina++;
        osveziKorpu();
      }
    }
    );
  }
  function izbaci(productID){
    products.forEach((product)=>{
      if(product.id===productID){
        if(product.kolicina>0){
          product.kolicina--;
        setKorpaProducts(korpaProducts-1);
        osveziKorpu();
        }
      }
    }
    );
  }

  
  return <div className="App">
      <BrowserRouter className="App">
        <NavBar/>
        <Routes>
          <Route path='/' element={
            <Products products={products}
            dodaj={dodaj}
            izbaci={izbaci}
            />
          }
          />
          <Route path='/korpa' element={

            <Korpa numProducts={korpaProducts}
            products={korpaProducts}
            />
          }
          />



        </Routes>


      </BrowserRouter>
    </div>

}

export default App;
