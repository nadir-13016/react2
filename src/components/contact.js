import React, { Component } from 'react'
import "./contact.css"
import PropTypes from 'prop-types'




class Contact extends Component{
  constructor (props) {
    super(props);
    this.state={
      online: props.online
    }
  }
  render(){
    return (

       <div className="Contact">
          <img className="avatar" src={this.props.avatar} alt={this.props.name} />
          <div>
            <p className="name"> {this.props.name}</p>
  
                { this.state.online ?  (
          <div className="status"> 
                <i  className="status-online" onClick={event=>{
                  const online = !this.state.online
                  this.setState({online:online })
                }} />
                <p className="status-text" > online </p>
          </div>):(
            <div className="status" > 
                <i className="status-offline" onClick={event=>{
                  const online = !this.state.online
                  this.setState({online:online })
                }}/>
                <p className="status-text" > offline </p>         
            </div>   )     
  
                } 
          
          </div>
          
      </div>
      
    )
  }
}
  



Contact.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired
};

export default Contact;