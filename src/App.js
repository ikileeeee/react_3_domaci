import { useState } from 'react';
import { BrowserRouter, Routes , Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Products from './components/Products';
import Korpa from './components/Korpa';

function App() {
  const [korpaProducts, setKorpaProducts]=useState([]);

  const[numProducts, setNumProducts]=useState(0);
  const [products]=useState([
    {
      id:1,
      naziv: "SCITEC Whey Protein čoko-lešnik",
      opis:"Protein iz surutke se smatra “kraljem” svih proteina za bodibilding jer ima najveću biološku vrednost. Protein iz surutke ima najbolji aminokiselinski profil i veću koncentraciju BCAA od bilo kog drugog proteinskog izvora. Aminokiselinski sastav ovog preparata zasniva se na tzv. anaboličkim aminokiselinama razgranatog lanca (BCAA, taurin). ",
      cena: 4000,
      imgIndex:0,
      kolicina:0,
      naStanju: 8,
      ukupnaCena:0,
    },
    {
      id:2,
      naziv: "ISO-100 Hydrolyzed Protein",
      opis:"Dymatize ISO-100 je savršeno instantizovan (lako se rastvara u vodi). Detaljna obrada Dymatize-ovog protein izolata iz surutke pruža vam instantnu rastvorljivost u svojoj pravoj formi. Pri proizvodnji je prošao kroz ni manje ni više nego 5 koraka kontrolisanja kvaliteta. Proteini su vrlo znacajni u ishrani, korisno ih je koristiti ako trenirate.",
      cena: 5000,
      imgIndex:1,
      kolicina:0,
      naStanju: 4,
      ukupnaCena:0,
    },
    {
      id:3,
      naziv: "Animal Whey",
      opis:"Protein je savršeno sredstvo za popunjavanje praznina između obroka, obezbeđujući koncentrisanu dozu najvažnijeg makronutrijenta za fizički aktivne ljude. Danas skoro svaki ozbiljni sportista koristi proteine surutke – pre podne, između obroka, posle treninga, pre spavanja. Sa ovako korisnim proizvodom za izgradnju mišića, mogućnosti su beskrajne.",
      cena: 3000,
      imgIndex:2,
      kolicina:0,
      naStanju: 6,
      
      ukupnaCena:0,
    },

  ]);
  
  const [trenutniPr, setTrenutnePr]=useState(products);
  function osveziKorpu(){
    setKorpaProducts(products.filter((product)=>product.kolicina>0));
  }

  function dodaj(id){
    products.forEach((product)=>{
      if(product.id===id){
        if(product.kolicina<product.naStanju){
        setNumProducts(numProducts+1);
        product.kolicina++;
        product.ukupnaCena=product.ukupnaCena+product.cena;
        osveziKorpu();
      }else{
        alert(
          "Ukupna kolicina na stanju "+product.naziv+" je "+product.naStanju
        );

      }
    }
    }
    );
  }
  function izbaci(productID){
    products.forEach((product)=>{
      if(product.id===productID){
        if(product.kolicina>0){
          product.kolicina--;
        setNumProducts(numProducts-1);
        product.ukupnaCena=product.ukupnaCena-product.cena;
        osveziKorpu();
        }
      }
    }
    );
  }

  function pretrazi(cena){
    if(cena==0){
      setTrenutnePr(products);
    }else{
      const pr=[];
      var k=0;
      products.forEach((product)=>{
        if(product.cena<=cena){
          pr[k++]=product;
        }
      });
      setTrenutnePr(pr);
    }
  }

  
  return <div className="App">
      <BrowserRouter className="App">
        <NavBar>
        </NavBar>
        <Routes>
        
          <Route path='/' element={
            <Products products={trenutniPr}
            dodaj={dodaj}
            izbaci={izbaci}
            pretrazi={pretrazi}
            />
          }
          /> 

          <Route path='/korpa' element={
        
            <Korpa 
            numProducts={numProducts}
            products={korpaProducts}
            />
          }
        
          />
        </Routes>
      </BrowserRouter>
    </div>

}

export default App;
