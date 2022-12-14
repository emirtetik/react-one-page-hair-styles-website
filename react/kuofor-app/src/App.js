import './App.css';
import Main from './Components/Main';
import Navbar from './Components/Navbar';
import We from './Components/We';
import Services from "./Components/Services";
import Photo from './Components/Photo';
import Price from './Components/Price';
import Footer from "./Components/Footer"


function App() {
  return (
    <>
     <Navbar />
     <Main />
     <We />
     <Services />
     <Photo />
     <Price/>
     <Footer/>
    </>
  );
}

export default App;
