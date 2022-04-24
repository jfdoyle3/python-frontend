import React, { useState,useEffect } from 'react';
import axios from 'axios';


const Home = () => {

  const [crypto, setCrypto] = useState('');

  useEffect(()=>{
    const getAllData = async () => {
      try {
        const res = await axios.get('http://127.0.0.1:80/')
        console.log(res.data)
        setCrypto(res.data);
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
      <h1>{crypto.currency}</h1>
      <p>{crypto.high}</p>
    </div>
  )
}

export default Home;