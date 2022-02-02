import React from "react";
import "./interiit.css";
import Navbar from "../Navbar";
import useDocumentTitle from "../useDocumentTitle";
import Footer from "../Footer";
// import Footer from "../Footer";
// import '../Footer.css';

// dynamic titles props
function Page(props) {
  const titleSuffix = ' | Expectations, IIT Mandi'
  useDocumentTitle(`${props.title}${titleSuffix}`)
  return <div>{props.content}</div>
}

function Interiit() {
  return (
    <Page content={
    <div>
      <Navbar />
      <div className="heading">
        <h3>Inter IIT Meets</h3>
      </div>
      <div className="container-meet">
        <div className="container-content">
          <div className="image">
            <img src="https://iit-techambit.in/content/images/size/w2000/2021/05/Pnademic--Paranoia--and-Possibility-1.png" className="interiit-image" />
          </div>
          <div className="text">
            <h1 className="meet-heading">Tech Meet</h1>
            <p className="container-text">
              The Inter IIT tech meet is a chance to bring ultimate glory to the
              institute, and test your skills against chosen contingents of all
              other IITs. The inter IIT tech meets started in 2012, and take
              place early in the year. Events are divided into three categories:
              high-prep, mid-prep, and low-prep, indicating the amount of
              preparation and team size required. If chosen as a part of the
              representing contingent of our college, you get a chance to travel
              to other IITs and compete with the brightest minds in the country.
              IIT Mandi stood 9th at the Inter-IIT tech meet 2020, with a Gold,
              a Silver and a Bronze medal. We stood 8th a year before that with
              one Gold and three Bronze medals.
            </p>
          </div>
        </div>
        <div className="container-content">
          <div className="image">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fkgpchronicle.iitkgp.ac.in%2Fwp-content%2Fuploads%2F2019%2F12%2FTrophies.jpg&f=1&nofb=1" className="interiit-image" />
          </div>
          <div className="text">
            <h1 className="meet-heading">Sports Meet</h1>
            <p className="container-text">
              The oldest and most prestigious of all the inter-IIT meets is the
              Sports meet. One of the most awaited calendar events, it is
              organized in December, with the Aquatics events held separately in
              October. Athletes from all the 23 IITs converge at the host IIT to
              compete for the cup of the longest-running Inter-collegiate meet.
              Tournaments are held in 13 different sports like athletics,
              cricket, football, swimming, badminton, hockey. In 2019, IIT Mandi
              stood 10th among all institutes. In 2020, all IITs promoted an
              online fitness movement to stay fit at home during lockdown. The
              event was not held due to COVID situations since 2019.
            </p>
          </div>
        </div>
        <div className="container-content">
          <div>
            <img src="https://www.clickkgp.com/media/79178452_3207231976017777_672446502500564992_n.jpg" className="interiit-image" />
          </div>
          <div className="text">
            <h1 className="meet-heading">Cultural Meet</h1>
            <p className="container-text">
              The Inter IIT Cultural meet, a relatively new meet is an annual
              gathering of teams from all IITs across India, where they compete
              across wide range of cultural activities. The event is hosted in
              cycle by one of the participating institutions and is organized
              during the month of December. Started in 2016, it is still in its
              infancy, yet it is filled with zeal and awaited all year. It's an
              established platform to showcase cultural activities and artistic
              flair across IITs in a 4 days culmination of modern drama, dance,
              Fine Arts, and Design. In 2019, IIT Mandi came 2nd among all IITs
              in the 51 hour movie making competition and stood 14th, overall
              among all events. Cultural meet had not been held in the past two
              years due to the Covid-19 pandemic.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    } title='InterIIT' />
  );
}

export default Interiit;
