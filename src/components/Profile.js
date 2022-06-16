import React, { useEffect, useState } from 'react'

export const Profile = () => {

    const [nombre, setNombre] = useState('');

    const getData = () => {
        return localStorage.getItem('name');
    }

    useEffect( ()=>{
        console.log('efecto');
        setNombre(getData());
    },[])

  return (
    <div>
        <h3>Name: {nombre}</h3>   
    </div>
  )
}
