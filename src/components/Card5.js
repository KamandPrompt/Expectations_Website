import React,{useState} from "react";

function About5(){
  var [name,setName]=useState("IIT Mandi");
  var [job,setJob]=useState("Designauts");
  var [about,setAbout]=useState('Designauts is one of the only cultural clubs that doesnt require any natural skill. Everything the club does is taught from scratch and can be done by anyone with zero experience in design or art. The club provides students an opportunity to enhance and show off their design knowledge.');

  return(
    
    <div className="Card">
      <div className="upper-container">
        <div className="image-container">
          <img src="data:image/png;base64,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" alt="" height="100px" width='100px'/>
        </div>
      </div>
      <div className="lower-container">
        <h1> {name} </h1>
        <h2>{job}</h2>
        <p>{about}</p>
        <button><a href="https://wiki.iitmandi.co.in/p/Designauts" target="_blank">Visit</a></button>

      </div>
    </div>
    
    
  )
}
export default About5;