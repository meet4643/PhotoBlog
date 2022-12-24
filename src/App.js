import './component/App.css';
import { Route, Routes } from 'react-router-dom';
import Nav from './component/Nav';
import Home from './component/Home';
import  Gallery from './component/Gallery';
import Content from './component/Content';
import About from './component/About';
import Footer from './component/Footer';



function App() {
  return (
    < >
   
   <Nav/>

<Routes>

<Route exact path='/' element={<Home />} />
<Route exact path='/Gallery' element={<Gallery />} />
<Route exact path='/Home' element={<Home />} />
<Route exact path='/About' element={<About />} />
<Route exact path='/Content' element={<Content />} />

  
</Routes>

<Footer/>
</>
  );
}

export default App;
