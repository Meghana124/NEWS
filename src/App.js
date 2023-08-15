import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Show from './Show';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './NavbarComponent';

import Home from './Home';
import About from './About';
import Politics from './Politics';
import Movies from './Movies';
import Sports from './Sports';
import Youtube from './Youtube';
import Facebook from './Facebook';
import Instagram from './Instagram';
import Twitter from './Twitter';
import Amazon from './Amazon';
import Flipkart from './Flipkart';
import Myntra from './Myntra';

import DropdownItem2 from './DropdownItem2';
import DropdownItem3 from './DropdownItem3';






function App() {
  let [news, setNews] = useState([])

  

  useEffect(() => {
    axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=e7d8d2601f1b4cd7bfe450b4543cc9be").then((res) => {
      console.log(res.data.articles)
      setNews(res.data.articles)
    })
  }, [])


  return (
    <>
        <Router>
      <div>
      <NavbarComponent />
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/politics" element={<Politics/>} />
          <Route path="/movies" element={<Movies/>} />
          <Route path="/technical" element={<About/>} />
          <Route path="/sports" element={<Sports/>} />
          <Route path="/youtube" element={<Youtube/>} />
          <Route path="/facebook" element={<Facebook/>} />
          <Route path="/instagram" element={<Instagram/>} />
          <Route path="/twitter" element={<Twitter/>} />

          <Route path="/amazon" element={<Amazon/>} />
          <Route path="/flipkart" element={<Flipkart/>} />
          <Route path="/myntra" element={<Myntra/>} />
          <Route path="/dropdown/item2" element={<DropdownItem2/>} />
          <Route path="/dropdown/item3" element={<DropdownItem3/>} />
        </Routes>
      </div>
    </Router>
 
      <Show news={news} />


    </>
  )
}

export default App
