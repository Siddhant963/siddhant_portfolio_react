import React from 'react'
import Skills from "./data/Skills.json"
const Skill = () => {
  return (
 
 <>
 <div className=" skills" id='skill'>
  <h1>SKILLS</h1>
  <div  className='skills_items'>
  {Skills.map((data)=>{ 
    return(
     <>
       <div className="item" data-aos="flip-right" data-aos-durestion="2000" >
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
