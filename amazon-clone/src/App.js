// import React from 'react'
// import Routing from '../src/Router'

// const App = () => {
//   return (

     
//      <Routing/>
 
//   )
// }

// export default App










import "./App.css";
import Header from "./Components/Header/Header";
import Carousel from "./Components/Carousel/CarouselEffect";
import Category from "./Components/Category/Category";
import Product from "./Components/Product/Product"


function App() {
  return (
    <div>
      <Header />
      <Carousel />
      <Category />
      <Product />
    </div>
  );
}

export default App;
