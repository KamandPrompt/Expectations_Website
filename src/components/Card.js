import React,{useState} from "react";

function About(){
  var [name,setName]=useState("IIT Mandi");
  var [job,setJob]=useState("Music Club");
  var [about,setAbout]=useState('Music Club strives to provide a platform for the students to express their musical talent, be it singing, playing instruments, sound mixing, etc. Its mission is to help all students to develop good musical knowledge and apppreciate the diverse music present in the world!');
  
  return(
    
    <div className="Card">
      <div className="upper-container">
        <div className="image-container">
          <img src="https://wiki.iitmandi.co.in/images/thumb/8/83/Music_club.png/150px-Music_club.png" alt="" height="100px" width='100px'/>
        </div>
      </div>
      <div className="lower-container">
        <h1> {name} </h1>
        <h2>{job}</h2>
        <p>{about}</p>
        <button><a href="https://wiki.iitmandi.co.in/p/Music_Club" target="_blank">Visit</a></button>

      </div>
      
    </div>
    
    
  )
}
export default About;