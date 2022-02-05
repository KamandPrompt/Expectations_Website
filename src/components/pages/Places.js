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

function Places() {
    return(
        <Page content={
            <div>
                <Navbar />
                <div className="heading">
        <h3>Places and Eateries</h3>
      </div>
      <div className="container-meet">
        <div className="container-content">
          <div className="image">
              <img
                src="http://library.iitmandi.ac.in/gallery/_data/i/upload/2021/01/12/20210112115001-c0b332b8-la.jpg"
                alt="nptel image"
                style={{ width: "300px" }, { height:"250px"}}
              />
              <br />
            <br />
            <br />
            {/* <br /> */}
            <img
              src="http://library.iitmandi.ac.in/gallery/_data/i/upload/2021/01/12/20210112115003-bb7e0aed-la.jpg"
              alt="nptel image"
              style={{ width: "300px" }, { height:"250px"}} />
            <br />
            <br />
            <img
              src="http://library.iitmandi.ac.in/gallery/_data/i/upload/2021/01/12/20210112115000-9860717b-la.jpg"
              alt="nptel image"
              style={{ width: "300px" }, { height:"250px"}} />
          </div>
          <div className="text">
            <div className="container-text">
              <p className="container-para">
                <h4><u>North Campus</u></h4><br />
                <strong><u>Student's Dining Hall:</u></strong> There are a total of 4 mess. Two in the South Campus and the other two in the North Campus.
                The mess present in the North Campus are as follows:
                <ol className="list">
                    <li className="list2">
                    Pine Mess:  Located near the A10 block
                    </li>
                    <li>
                    Oak Mess: Catering mostly to the residents of the Dashir Hostel blocks and is situated on the eastern side of the North Campus
                    </li>
                </ol>
              </p>
              <p className="container-para">
              <ol className="list">
              <strong><u>Eateries:</u></strong>
                    <li className="list2">
                    Sunrise Canteen

                    </li>
                    <li>
                    Jassi Canteen

                    </li>
                    <li>
                      Amul Parlour

                    </li>
                    <li>
                      One Bite Cafe
                    </li>
                </ol>
              </p>
            </div>
            <div className="container-text">
              <p className="container-para">
              <h4><u>South Campus</u></h4>
              </p>
              <p className="container-para">
              <strong><u>Student's Dining Hall:</u></strong> The mess present in the South Campus are as follows:
              <ol className="list">
                    <li className="list2">
                    Cedar Mess
                    </li>
                    <li>
                    Maple Mess
                    </li>
                </ol>
              </p>
            </div>
            <p className="container-text">
            <ol className="list">
              <strong><u>Eateries:</u></strong>
                    <li className="list2">
                    Raman Canteen : Usually open from 9 am to around 11.30 pm, the canteen is located near the bus stop of the South Campus.
                    </li>
                    <li>
                    Daily Dose Cafe : Situated at the ground floor of the Maple (D2) mess, the newly opened joint serves a variety of snacks (ranging from Pizza, Pasta, Waffles and Doracakes)
                    </li>
                    <li>
                    The Priya Canteen : Located inside the Cedar (D1) mess, the canteen mostly serves ready-to-eat items.
                    </li>
                </ol>
            </p>
          </div>
        </div>
      </div>
      <Footer />
            </div>
        } title='Places' />
    );
}
export default Places;