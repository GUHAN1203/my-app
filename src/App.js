import './App.css';
import{ BrowserRouter, Routes, Route  } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { db } from './firebase-config';
import{collection,getDocs} from "firebase/firestore";
import Packages from './Pages/packages';

function App() {
  <BrowserRouter>
< Routes>
<Route path ='packages' element={< Packages />} />
</Routes>
</BrowserRouter>
  const [packages, setPackages] = useState([]);
  const packagesCollectionRef = collection(db,"packages")

useEffect(()=>{

  const getPackages = async () =>{
    const data = await getDocs(packagesCollectionRef)
    setPackages(data.docs.map((doc)=> ({...doc.data(),id: doc.id})));

  }
   getPackages()

},[])


  return (
    <div className="App"> {packages.map((packages) =>{return(
      <div>
        {""}
        <h1>country:{packages.country}</h1>
        </div>
    );
    })}
      </div>









  );
}

export default App;
