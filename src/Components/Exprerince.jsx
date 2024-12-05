import React from 'react'
import exprience from "./data/experience.json"

const Exprerince = () => {
  return (
 <>
 <div className="ex">
  <h1>Experience</h1>
  { exprience.map((data) => { 
      return(
        <>
        <div key ={data.id} className='ex_item text-center ' >
          <div className="left">
            <img src={data.profile} alt="" className='cprofile' />
          </div>
          <div className="right">
            <h3>{data.company} <h5>{data.role}</h5></h3>
            <h5>
              {data.duration} 
            </h5>
            <h6>{data.location}</h6>
            <p>{data.description}</p>
            <p>{data.skills}</p>
          </div>
          
          </div>
        </>
      )
    })
  }
 </div>
 </>
  )
}

export default Exprerince
