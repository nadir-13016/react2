import React from 'react'
import "./contact.css"
import PropTypes from 'prop-types'




const Contact = props => {
  return(
    <div className="Contact">
        <img className="avatar" src={props.avatar} alt={props.name} />
        <div>
          <p className="name"> {props.name}</p>

              { props.status ?  (
          <div className="status"> 
              <i className="status-online"/>
              <p className="status-text" > online </p>
          </div>):(
          <div className="status" > 
              <i className="status-offline"/>
              <p className="status-text" > offline </p>         
          </div>   )     

              } 
        
        </div>
        
    </div>
    )
}


Contact.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired
};

export default Contact;