import React from 'react'
import "./Weather.scss"
import useFetch from '../../hooks/useFetch'



function Weather() {
   const { data, Loading, error } = useFetch("https://api.open-meteo.com/v1/forecast?latitude=36.82&longitude=10.17&hourly=temperature_2m")

   if (Loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Something went wrong{console.log(error)}</div>;
  }

  console.log(data)

  return (
    <div>
        <div className='weather'>
        <h1>Tunis :</h1>
        <h3>20°</h3>
        


        </div>


    </div>
  )
}

export default Weather