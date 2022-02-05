import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import useDocumentTitle from "../useDocumentTitle";

// dynamic titles props
function Page(props) {
  const titleSuffix = ' | Expectations, IIT Mandi'
  useDocumentTitle(`${props.title}${titleSuffix}`)
  return <div>{props.content}</div>
}

// this file's few lines of CSS in interiit.css
function Nptel() {
  return (
    <Page content={
    <div>
      <Navbar />
      <div className="heading">
        <h3>NPTEL Courses</h3>
      </div>
      <div className="container-meet">
        <div className="container-content">
          <div className="image">
            <img
              src="https://cdn.internshala.com/static/images/college_register/official_partners/nptel-logo.png"
              alt="nptel image"
              style={{ width: "260px" }}
            />
          </div>
          <div className="text">
            <div className="container-text">
              <p className="container-para">
                NPTEL is an initiative by the Ministry of Education which offers
                video-based courses and web-based e-courses.
              </p>
              <p className="container-para">
                IIT Mandi considers online courses for various degree programs
                like NPTEL. A student from UG/Dual Degree is allowed a maximum
                of <b> 9</b> Credits, one from MA/M.Sc./M.Tech./I-Ph.D. is allowed a
                maximum of <b>6</b> Credits and one from MS/PhD is allowed a maximum of
                <b> 3</b> Credits.
              </p>
            </div>
            <div className="container-text">
              <p className="container-para">
                Students take permission from the required authorities before
                the start of the semester, and the final approval is made by AD
                (Courses). The credits earned through such courses will only
                appear on the transcript. So, these courses will appear as
                Pass/Fail courses on the transcript and will not be counted
                towards the overall credit requirement of the program and for
                CGPA calculation as per IIT Mandi grade system.
              </p>
              <p className="container-para">
                For this, students submit the necessary documents and completion
                certificate at Academics Section through FA/Research Guide. It
                should be ensured that these courses are not in the list of
                courses being regularly offered/taught at the Institute.
              </p>
            </div>
            <p className="container-text">
              Checkout the NPTEL link
              <a href="https://nptel.ac.in/" className="highlight" target="_blank">
                {" "}
                Here
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    } title="NPTEL" />
  );
}

export default Nptel;
