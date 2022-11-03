import React from 'react'
import { useState } from 'react'
import { Rating } from "react-simple-star-rating";

function Filter({filterName,filterRating}) {
    const [name, setName] = useState("")
    const [rating, setRating] = useState()
   
  return (
    <div>
        <input value={name} placeholder='write the film name' onChange={(e) =>filterName (e.target.value)}  />
        <input value={rating} placeholder='Stars number'></input> 
        <button>Search</button>
        <Rating
        numberOfStars={5}
        
        />
        
    </div>
  )
}

export default Filter
