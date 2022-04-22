import React, { useState,useEffect } from 'react';
import axios from 'axios';


const Home = () => {

  const [boo, setBoo] = useState('');

  useEffect(()=>{
    const getAllData = async () => {
      try {
        const res = await axios.get('http://127.0.0.1:5000/')
        console.log(res.data)
        setBoo(res.data);
      } catch (err) {
        console.log(err)
      }
    }
    getAllData();
  },[])

  return (
<div style={{
      display: "flex",
      flex: "1",
      flexDirection: "column",
      alignItems: 'center',
      minHeight: '100vh',
    }}>
      <h1>{boo.boo}</h1>
    </div>
  )
}

export default Home;