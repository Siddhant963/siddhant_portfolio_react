import React from 'react'
import Skills from "./data/Skills.json"
const Skill = () => {
  return (
 
 <>
 <div className=" skills">
  <h1>SKILLS</h1>
  <div  className='skills_items'>
  {Skills.map((data)=>{ 
    return(
     <>
       <div className="item" >
        <img src={data.imageSrc} alt="" />
        <h3>{data.title}</h3>

       </div>
     </>
    )
  })}
   </div>
 </div>
 </>
  )
}

export default Skill
