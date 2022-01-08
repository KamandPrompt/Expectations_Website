import React,{useState} from "react";

function About2(){
  var [name,setName]=useState("IIT Mandi");
  var [job,setJob]=useState("Dance Club");
  var [about,setAbout]=useState("We believe that dance is not just an art form, it is a way of expression, and a show of strength and discipline. Dance has become a part of our lives, and we wish to support and encourage all dance enthusiasts.");
  
  


  
  return(
    
    <div className="Card">
      <div className="upper-container">
        <div className="image-container">
          <img src="https://wiki.iitmandi.co.in/images/thumb/4/4c/Udc.jpg/150px-Udc.jpg" alt="" height="100px" width='100px'/>
        </div>
      </div>
      <div className="lower-container">
        <h1> {name} </h1>
        <h2>{job}</h2>
        <p>{about}</p>
        <button><a href="https://wiki.iitmandi.co.in/p/UDC" target="_blank">Visit</a></button>

      </div>
    </div>
    
    
  )
}
export default About2;