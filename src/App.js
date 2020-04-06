import React from 'react';
import Contact from './components/contact'
import './App.css';
import "./components/contact.css"


const john={
  name:"John Doe",
  avatar: "https://randomuser.me/api/portraits/men/17.jpg",
  status: false
}
const emilia={
  name:"Emilia Clarke",
  avatar: "https://static1.purepeople.com/articles/8/36/15/68/@/5204702-emilia-clarke-lors-de-la-premiere-du-fil-624x600-2.jpg",
  status: true
}
const kit={
  name:"kit Harrington",
  avatar: "https://static1.terrafemina.com/articles/6/30/22/26/@/374571-kit-harington-conference-de-presse-de-953x0-1.jpg",
  status: true
}

function App() {
  return (
    <div >
      <Contact {...john}/>

      <Contact {...emilia}/>

      <Contact {...kit}/>
    </div>
      
  );
}


export default App;
