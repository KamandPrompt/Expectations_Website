import React,{useState} from "react";

function About6(){
  var [name,setName]=useState("IIT Mandi");
  var [job,setJob]=useState("Art Geeks");
  var [about,setAbout]=useState('I Think... I feel... I create... Therefore I am Art is a way of expressing yourself. As a child, we all have expressed ourself by scribbling out our dreams, our fears, our joys, in all, our emotions and ideas. ');

  

  return(
    
    <div className="Card">
      <div className="upper-container">
        <div className="image-container">
          <img src="https://wiki.iitmandi.co.in/images/thumb/0/05/Artgeeks.jpeg/300px-Artgeeks.jpeg" alt="" height="100px" width='100px'/>
        </div>
      </div>
      <div className="lower-container">
        <h1> {name} </h1>
        <h2>{job}</h2>
        <p>{about}</p>
        <button><a href="https://wiki.iitmandi.co.in/p/Art_Geeks" target="_blank" > Visit </a></button>

      </div>
    </div>
    
    
  )
}
export default About6;