import React, {useEffect, useState} from "react";
import "./App.css";
import axios from 'axios'

import { BASE_URL, API_KEY } from './Components/URL_API'
import Title from './Components/Title'
import Copyright from './Components/Copyrightjs'
import Date from './Components/Date'
import Explanation from './Components/Explanation'
import Image from './Components/Image'
// import { set } from "lodash";

 export default function App() {
    const [title, setTitle] = useState('')
    const [copyright, setCopyright] = useState('')
    const [date, setDate] = useState('')
    const [explanation, setExplanation] = useState('')
    const [image, setImage] = useState('')

  useEffect(() => {
    axios.get(`${BASE_URL}/apod?api_key=${API_KEY}`)
      .then(res => {
        console.log(res.data)
        setTitle(res.data.title)
        setCopyright(res.data.copyright)
        setDate(res.data.date)
        setExplanation(res.data.explanation)
        setImage(res.data.image)
      })
      .catch((err) => {
        console.error(error)
      })
  }, [])


    return (
    <div className='App'>

        <Title className='title' title={title} />

        <Image className='image' image={image}/>

        <Date className='date' date={date} /> 

        <Explanation className='explanation' explanation={explanation} />
        
        <Copyright className='copyright' copyright={copyright}/>
      
    </div>
    );
  }


