import React,{useState} from "react";

function About4(){
  var [name,setName]=useState("IIT Mandi");
  var [job,setJob]=useState("Photography Club - Shutterbugs");
  var [about,setAbout]=useState('Shutterbugs is the photography branch of the club. Focuses on various kinds of photography including astrophotography, portrait photography, landscape photography and street photography. It covers all college events and treks. It also organizes photo trips and walks. Notable pictures clicked by club members of all generations can be seen on its Instagram.');

  return(
    
    <div className="Card">
      <div className="upper-container">
        <div className="image-container">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoWWjLEupM5Y0aAjU1Bx4dmngRp__BHr2hnf_04UWA5Wg8p9HlLM8NDdfGgAO2cbbu0vU&usqp=CAU" alt="" height="100px" width='100px'/>
        </div>
      </div>
      <div className="lower-container">
        <h1> {name} </h1>
        <h2>{job}</h2>
        <p>{about}</p>
        <button><a href="https://wiki.iitmandi.co.in/p/Photography_and_Moviemaking_Club" target="_blank">Visit</a></button>

      </div>
    </div>
    
    
  )
}
export default About4;