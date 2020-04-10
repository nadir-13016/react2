import React from 'react'
import "./contact.css"
import PropTypes from 'prop-types'


const users = [
  {
    name: 'Robert Reyes',
    avatar: 'https://randomuser.me/api/portraits/men/28.jpg',
    online: false
  },
  {
    name: 'Nellie Caldwell',
    avatar: 'https://randomuser.me/api/portraits/women/17.jpg',
    online: true
  },
  {
    name: 'Vernon Mason',
    avatar: 'https://randomuser.me/api/portraits/men/84.jpg',
    online: true
  },
  {
    name: 'Erica Hunt',
    avatar: 'https://randomuser.me/api/portraits/women/87.jpg',
    online: false
  },
  {
    name: 'Juanita Phillips',
    avatar: 'https://randomuser.me/api/portraits/women/55.jpg',
    online: true
  }
];


const ContactList = () =>{
  return (
    <div>
     { users.map(user =>(  
     <div className="Contact">
        <img className="avatar" src={user.avatar} alt={user.name} />
        <div>
          <p className="name"> {user.name}</p>

              { user.online ?  (
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
        
    </div>))
    }
    </div>
  )
}

ContactList.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired
};

export default ContactList