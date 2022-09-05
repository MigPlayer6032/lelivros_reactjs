import { useState } from 'react'
import Menu from './components/Menu'
import './App.css';
import Rotas from 'react-router';

// function App() {
//   return (<>
//     <Menu />
//     <div className="landing">
//       <div className="wrapper">
//         <div className="static-txt">Ler um livro é</div>
//         <ul className="dynamic-txts">
//           <li><span>emocionante.</span></li>
//           <li><span>divertido.</span></li>
//           <li><span>interessante.</span></li>
//           <li><span>gratuito.</span></li>
//         </ul>
//       </div>

//       <h4 className="subtitle">Foi por isso que criamos o LeLivros.</h4>
//       <div className="arrow">
//         <div className="arrow-animated"></div>
//       </div>
//     </div>
//   </>
//   )
// }

import { Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <header>
        <h1>Welcome to React Router!</h1>
      </header>
      <Routes>
        <Route path="/" element={null} />
        <Route path="about" element={<div>Hello, about!</div>} />
      </Routes>
    </div>
  );
}
