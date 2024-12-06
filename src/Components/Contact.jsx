import React from 'react'
import contact from "./data/contact.json"
const Contact = () => {
  return (
   <>
   <div className=" container contact" id='contact'>
    <h1>CONTACT</h1>
   </div>
   <div className=" contact-item">
    {
      contact.map((data)=>{ 
        return(
          <>
          <div className="icon" data-aos="zoom-out" data-aos-durestion="1000">
            <a href={data.link}><img src={data.imageSrc} alt="" /></a>
          </div>
          </>
        )
      })
    }

   </div>
   </>
  )
}

export default Contact
