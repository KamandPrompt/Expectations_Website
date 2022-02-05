import React from "react";
import "./interiit.css";
import Navbar from "../Navbar";
import Footer from "../Footer"
import suvalsar from "./suvalsar.jpg"
import dashir from "./dashir.jpg"
import b1 from "./b1.jpg"
import parashar from "./parashar.jpg"
import useDocumentTitle from "../useDocumentTitle";
function Page(props) {
    const titleSuffix = ' | Expectations, IIT Mandi'
    useDocumentTitle(`${props.title}${titleSuffix}`)
    return <div>{props.content}</div>
  }
  function Hostels() {
    return (
      <Page content={
        <div>
        <Navbar />
        {/* <img src={image} alt="image"> */}
        <div className="heading">
          <h3>Hostels</h3>
        </div>
        <p className="host-content">
        Hostels of IIT Mandi are named after the famous and beautiful lakes present in the north region of Himachal Pradesh. Currently, there are Eight hostels spread overall. South Campus (Four) and the North Campus (Four). Each hostel is managed by a Warden, ably assisted by an Assistant Warden, faculty members, a caretaker and a dedicated team of support staff and guards. There are two Girls' Hostels i.e., Chandrataal Hostel in South Campus and Gauri Kund Hostel in North Campus. Followed by six Boys Hostels i.e., Suvalsar, Parashar, and Nako in South Campus and Beaskund, Suraj Tal, Dashir in North Campus. Students play an important role in the management of the hostels. They are represented by elected secretaries who help the Wardens in the day in the smooth running of the hostels. Mess catering to different hostels provide homely food. Common room is equipped with LCD TVs, Table Tennis facilities.
        </p>
        <br />
        <div className="heading">
          <h3>North Campus</h3>
        </div>
        <p className="host-content">
        The North Campus is to host all the students in the long run (with the South Campus catering to the residential and research requirements of the research scholars). At present, all the undergraduate students reside in the North Campus, with some of the postgraduates students also living here.
        </p>
        <div className="container-meet">
          <div className="container-content">
            <div className="image">
              <img
                src={b1} alt="hello"
                className="sports-image"
              />
            </div>
            <div className="text">
              <h2 className="meet-heading"><u>BeasKund</u></h2>
              <p className="container-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div className="container-content">
            <div className="image">
              <img
                src="https://lh5.googleusercontent.com/p/AF1QipP0qdbXi0FOKO5kcZRwI4btFCwQuCQketF20bKd=w1080-k-no" alt="hello"
                className="sports-image"
              />
            </div>
            <div className="text">
              <h2 className="meet-heading"><u>GauriKund</u></h2>
              <p className="container-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit maiores reprehenderit, inventore fuga facilis quis. Soluta, minus impedit dolore culpa eius numquam explicabo repudiandae cum vitae libero sed tempora consequatur eligendi consectetur perferendis alias optio vero molestiae voluptas voluptate labore exercitationem iure! Ad porro at blanditiis sunt! Dicta hic similique quis? Officia voluptate quod rem maiores ullam consequuntur facere dolores.
              </p>
            </div>
          </div>
          <div className="container-content">
            <div>
              <img
                src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202011/IIT_Mandi_campus__1__1200x768.jpeg?q.Z1gialLJRjIv1680kLW28uON5WgSz4&size=770:433" alt="hello"
                className="sports-image"
              />
            </div>
            <div className="text">
              <h2 className="meet-heading"><u>Suraj Tal</u></h2>
              <p className="container-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, corrupti. Corrupti asperiores ducimus impedit quibusdam praesentium dicta, fugit aut consequatur voluptatibus voluptate. Saepe ea iusto quo libero obcaecati soluta animi eveniet, illo aliquid omnis maxime assumenda voluptatum similique accusantium sed quis inventore dicta nobis, atque sequi, tempora a laboriosam expedita mollitia! Inventore velit vero vel quisquam corporis in natus doloremque?
              </p>
            </div>
          </div>
          <div className="container-content">
            <div className="image">
              <img
                src={dashir} alt="hello"
                className="sports-image"
              />
            </div>
            <div className="text">
              <h2 className="meet-heading"><u>Dashir</u></h2>
              <p className="container-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo impedit iste molestias, dolor officiis, aliquid veniam ullam voluptate quia soluta enim placeat saepe accusamus eos architecto reiciendis iusto ducimus natus doloribus? Necessitatibus alias assumenda nesciunt fugit magni illo aspernatur veniam repellendus? Aliquid earum provident molestias quibusdam rerum doloribus inventore! Sapiente, non adipisci alias ut ullam voluptate fugit incidunt animi et?
              </p>
            </div>
          </div>
        </div>
        <br />
        <div className="heading">
          <h3>South Campus</h3>
        </div>
        <p className="host-content">
        The South Campus is bordered by the Uhl River on the west, Kamand village on the north and Kahra village on the east. IIT Mandi was the first among all the new IITs to shift residential and academic facilities on the main (South) campus. A Faculty and Staff Recreation Club in the South Campus was also inaugurated on 29 October 2016. The master plan for the complete development of the campus is ready and intends to cater for 5000 students, 600 faculty and associated staff. The South Campus at IIT Mandi in Kamand is projected to host all the research facilities in the long run.
        </p>
        <div className="container-meet">
          <div className="container-content">
            <div className="image">
              <img
                src="https://lh5.googleusercontent.com/p/AF1QipP8jqBuPulN7hBN1LDatD3IonORt_SBxERo59o=w1080-k-no" alt="hello"
                className="sports-image"
              />
            </div>
            <div className="text">
              <h2 className="meet-heading"><u>Nako</u></h2>
              <p className="container-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div className="container-content">
            <div className="image">
              <img
                src={parashar} alt="hello"
                className="sports-image"
              />
            </div>
            <div className="text">
              <h2 className="meet-heading"><u>Parashar</u></h2>
              <p className="container-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit maiores reprehenderit, inventore fuga facilis quis. Soluta, minus impedit dolore culpa eius numquam explicabo repudiandae cum vitae libero sed tempora consequatur eligendi consectetur perferendis alias optio vero molestiae voluptas voluptate labore exercitationem iure! Ad porro at blanditiis sunt! Dicta hic similique quis? Officia voluptate quod rem maiores ullam consequuntur facere dolores.
              </p>
            </div>
          </div>
          <div className="container-content">
            <div>
              <img
                src={suvalsar} alt="hello"
                className="sports-image"
              />
            </div>
            <div className="text">
              <h2 className="meet-heading"><u>Suvalsar</u></h2>
              <p className="container-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, corrupti. Corrupti asperiores ducimus impedit quibusdam praesentium dicta, fugit aut consequatur voluptatibus voluptate. Saepe ea iusto quo libero obcaecati soluta animi eveniet, illo aliquid omnis maxime assumenda voluptatum similique accusantium sed quis inventore dicta nobis, atque sequi, tempora a laboriosam expedita mollitia! Inventore velit vero vel quisquam corporis in natus doloremque?
              </p>
            </div>
          </div>
          <div className="container-content">
            <div className="image">
              <img
                src="https://iitmandi.ac.in/institute/campus/images/campus3.jpeg" alt="hello"
                className="sports-image"
              />
            </div>
            <div className="text">
              <h2 className="meet-heading"><u>Chandrataal</u></h2>
              <p className="container-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo impedit iste molestias, dolor officiis, aliquid veniam ullam voluptate quia soluta enim placeat saepe accusamus eos architecto reiciendis iusto ducimus natus doloribus? Necessitatibus alias assumenda nesciunt fugit magni illo aspernatur veniam repellendus? Aliquid earum provident molestias quibusdam rerum doloribus inventore! Sapiente, non adipisci alias ut ullam voluptate fugit incidunt animi et?
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      } title='Hostels' />
    );
  }
  
  export default Hostels;  