import React from 'react'
import "./contact.css"



const avatar = "https://randomuser.me/api/portraits/men/17.jpg"
const name =  "John Doe";


const Contact =()=> {
  return(
    <div className="Contact">
        <img className="avatar" src={avatar} alt={name} />
        <div>
          <p className="name"> {name}</p>
          <div className="status"> 
              <i className="status-online"/>
              <p className="status-text"> online </p>
          </div>
        </div>
        
    </div>
    )
}


export default Contact;