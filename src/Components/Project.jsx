import React from 'react'
import pro from './data/Projects.json'
const Project = () => {
  return (
<>
<div className=" project" id='project'>
  <h1>PROJECTS </h1>
  <div className="project_items">
    { 
      pro.map((data)=>{ 
        return (
          <>
         <div className="card crd"  key={data.id} data-aos="zoom-out-right" data-aos-durestion="1500" >
          <img src={data.image} alt="" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{data.title}</h5>
            <p className="card-text">{data.description}</p>
            <p className="card-text">{data.points}</p>
            <a href="" className="btn btn-primary">Github Repo link</a>
          </div>
         </div>
          </>
        )
      })
    }

  </div>
</div>
</>
  )
}

export default Project
