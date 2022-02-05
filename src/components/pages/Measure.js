import React from "react";
import "./interiit.css";
import "./places.css"
import Navbar from "../Navbar";
import Footer from "../Footer"
import useDocumentTitle from "../useDocumentTitle";
function Page(props) {
    const titleSuffix = ' | Expectations, IIT Mandi'
    useDocumentTitle(`${props.title}${titleSuffix}`)
    return <div>{props.content}</div>
  }

function Measure(){
    return (
        <Page content={
        <div>
            <Navbar />
                <div className="heading">
                    <h3>Covid Measures</h3>
                </div>
                <div className="container-meet">
        <div className="container-content">
          <div className="image">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/82/SARS-CoV-2_without_background.png"
              alt="nptel image"
              style={{ width: "260px" }}
            />
          </div>
          <div className="text">
            <div className="container-text">
              <p className="container-para">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo animi officiis quae ab! Earum accusamus autem atque error doloribus eligendi magni corrupti suscipit.
              </p>
              <p className="container-para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, quo! Magnam officiis, magni dignissimos quia exercitationem expedita debitis iusto odio unde eius saepe necessitatibus ipsum modi quas nostrum praesentium velit! Voluptates dolor, maiores nobis fuga cumque quo esse nam iste maxime ipsam cupiditate velit itaque iure corporis. Quibusdam, est nesciunt animi, expedita accusamus libero amet nobis nisi cum odit velit vero mollitia natus asperiores neque aut impedit.
              </p>
            </div>
            <div className="container-text">
              <p className="container-para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt suscipit quam veniam doloribus dicta similique quos ipsum, rem asperiores ad blanditiis numquam! Rem alias iusto sit accusamus accusantium expedita mollitia excepturi error tenetur? Officiis eveniet atque, labore totam placeat ex odio necessitatibus ad sunt quae nobis nostrum consequuntur ipsa cumque mollitia accusamus culpa. Temporibus perferendis doloribus, voluptatibus perspiciatis nostrum sunt, aliquam praesentium ducimus rerum facere et officiis a debitis labore aliquid accusantium officia voluptatum. Ipsa, neque inventore dolore labore voluptatibus ex dolor rem suscipit eos blanditiis odit dicta, aspernatur laudantium aperiam libero vel, sit quae error enim cumque maxime! Doloribus.
              </p>
              <p className="container-para">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia harum perspiciatis impedit voluptas repudiandae? Dolore ea repellendus quos molestiae dicta impedit? Quas alias labore nemo cupiditate quod dolor adipisci unde, rem laboriosam est! Totam libero neque nulla facere impedit quia repellendus sit adipisci atque. Quia labore tempore porro! Officia repudiandae dolore dolorem est rerum delectus magni.
              </p>
            </div>
            <p className="container-text">
              To check further guidelines and safety measures in IIT Mandi, please click
              <a href="https://iitmandi.ac.in/administration/Protocols%20&%20GUIDELINES.pdf" className="highlight" target="_blank" >
                {" "}
                Here
              </a>
            </p>
          </div>
        </div>
      </div>
            <Footer />
        </div>
    } title='Measure' />
    );
}
export default Measure;