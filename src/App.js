import React, {useEffect, useState} from "react";
import "./App.css";
import axios from 'axios'

import Title from './Components/Title'
import Copyright from './Components/Copyright'
import Date from './Components/Date'
import Explanation from './Components/Explanation'



 function App() {
   const [nasaData, setNasaData] = useState({})

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
      .then(res => {
        console.log(res);
        setNasaData(res.data)
      })
      .catch((err) =>  console.error(err));
  }, [])

    let image = document.createElement('img');
    image.src = nasaData.url;
    image.alt = nasaData.alt;

    return (
    <div className='App'>
      <div> 
        <Title title={nasaData.title} />
      </div>
      <div> 
        <img src={nasaData.url} alt = {nasaData.alt}/>
      </div>
      <div> 
        <Date date={nasaData.date} />
      </div>
      <div> 
        <Explanation explanation={nasaData.explanation} />
      </div>
      <div>
        <Copyright copyright={nasaData.copyright} /> 
       </div>
    </div>
    );
  }

export default App;
