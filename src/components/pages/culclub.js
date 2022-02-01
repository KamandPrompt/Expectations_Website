import React from "react";
import "./culclub.css"
import Navbar from "../Navbar";
import useDocumentTitle from "../useDocumentTitle";
import Footer from "../Footer";
// import '../Footer.css';

// dynamic titles props
function Page(props) {
  const titleSuffix = ' | Expectations, IIT Mandi'
  useDocumentTitle(`${props.title}${titleSuffix}`)
  return <div>{props.content}</div>
}

function Culclub() {
  return (
    <Page content={
    <div>
      <Navbar />
      <div className="banner2">
        <div className="banner__content">
          <div className="container">
            <div className="banner__text">
              <h1 className="banner_heading">Cultural Clubs</h1>
              <p>
              As passionate humans, we all love to sing, dance, mimic and act. While engineering and science are noble pursuits and necessary to sustain life, music, art, and poetry are what we stay alive for. The cultural society provides a stage to showcase your talents and helps to break away from the shackles of innumerable projects, assignments and quizzes. The various groups that are the limbs of the cultural society help you in embracing your inner artists. Be it bringing various characters to life, exhibiting new dance moves, composing new melodies or being a part of brainstorming sessions, you will always find a group of your interest.
              </p>
              <div className="banner__btn">
                <a
                  href="https://wiki.iitmandi.co.in/p/Cultural_Society"
                  target="_blank"
                  className="btn btn-smart"
                >
                  Cultural Society
                </a>
              </div>
            </div>

            <a
                className="ca3-scroll-down-link ca3-scroll-down-arrow"
                data-ca3_iconfont="ETmodules"
                data-ca3_icon=""
                href="#scroll"
              ></a>
          </div>
        </div>
      </div>
      <div id="scroll"></div>
      <div className="heading nav-unhide">
        <h4>Cultural Society</h4>
      </div>
      <div className="container-snip">
        <figure className="snip1559">
          <div className="profile-image">
            <img className="music-logo"
              src="https://wiki.iitmandi.co.in/images/thumb/8/83/Music_club.png/150px-Music_club.png"
              alt="Programming club"
            />
          </div>
          <figcaption>
            <h3>Music Club</h3>

            <p>
            Music Club strives to provide a platform for the students to express their musical talent, be it singing, playing instruments, sound mixing, etc. Its mission is to help all students to develop good musical knowledge and apppreciate the diverse music present in the world!
            </p>
            <div className="icons">
              <a href="https://www.facebook.com/musicsociety.iitmandi/">
                <i className="ion-social-facebook"></i>
              </a>
              <a href="https://www.instagram.com/musicsociety.iitmandi/?hl=en">
                <i className="ion-social-instagram"></i>
              </a>
              <a href="https://www.youtube.com/channel/UCNpO2CBOcq-TlsDli7610og">
                <i className="ion-social-youtube"></i>
              </a>
            </div>
            <button className="button-59" role="button">
              <a href="https://wiki.iitmandi.co.in/index.php?title=Music_Club&mobileaction=toggle_view_desktop" target="_blank">Visit</a>
            </button>
          </figcaption>
        </figure>
        <figure className="snip1559">
          <div className="profile-image">
            <img  className="music-logo"
              src="https://wiki.iitmandi.co.in/images/thumb/4/4c/Udc.jpg/150px-Udc.jpg"
              alt="STAC club"
            />
          </div>
          <figcaption>
            <h3>Dance Club</h3>

            <p>
            We believe that dance is not just an art form, it is a way of expression, and a show of strength and discipline. Dance has become a part of our lives, and we wish to support and encourage all dance enthusiasts.
            </p>
            <div className="icons">
              <a href="https://www.facebook.com/Danceclub.IITMandi/">
                <i className="ion-social-facebook"></i>
              </a>
              
             <a href="https://www.instagram.com/udc.iitmandi/?hl=en">
                <i className="ion-social-instagram"></i>
              </a>
              <a href="https://www.youtube.com/channel/UCM5vpEVIRryY0qW9SiVRUGA">
                <i className="ion-social-youtube"></i>
              </a>

            </div>
            <button className="button-59" role="button">
              <a href="https://wiki.iitmandi.co.in/p/UDC" target="_blank">Visit</a>
            </button>
          </figcaption>
        </figure>
        <figure className="snip1559">
          <div className="profile-image">
            <img className="music-logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROfAATTpqQPhuyffLQEivUe0RqnodXxi-jcA&usqp=CAU"
              alt="E-cell"
            />
          </div>
          <figcaption>
            <h3>Dramatic Club</h3>

            <p>
            The club believes that drama is not just about acting, it's much more than that. It's a way to express oneself, a form of expression. "Actions speak much louder when combined with words."
            </p>
            <div className="icons">
              <a href="https://www.facebook.com/gustaakhsaaleiitmandi/">
                <i className="ion-social-facebook"></i>
              </a>
              <a href="https://www.instagram.com/dramaclub_iitm/?hl=en">
                <i className="ion-social-instagram"></i>
              </a>
              </div>
            <br />
            <button className="button-59" role="button">
              <a href="https://wiki.iitmandi.co.in/p/Drama_Club" target="_blank">Visit</a>
            </button>
          </figcaption>
        </figure>
        <figure className="snip1559">
          <div className="profile-image">
            <img className="music-logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoWWjLEupM5Y0aAjU1Bx4dmngRp__BHr2hnf_04UWA5Wg8p9HlLM8NDdfGgAO2cbbu0vU&usqp=CAU"
              alt="Robotronics Club"
            />
          </div>
          <figcaption>
            <h3>Photography Club - Shutterbugs</h3>

            <p>
            Shutterbugs is the photography branch of the club. Focuses on various kinds of photography including astrophotography, portrait photography, landscape photography and street photography. It covers all college events and treks. It also organizes photo trips and walks. Notable pictures clicked by club members of all generations can be seen on its Instagram.
            </p>
            <div className="icons">
              <a href="https://www.facebook.com/iitmpc/">
                <i className="ion-social-facebook"></i>
              </a>
              <a href="https://www.instagram.com/shutterbugs.iitmandi/?hl=en">
                <i className="ion-social-instagram"></i>
              </a>
            </div>
            <button className="button-59" role="button">
              <a href="https://wiki.iitmandi.co.in/p/Photography_and_Moviemaking_Club" target="_blank">Visit</a>
            </button>
          </figcaption>
        </figure>
        <figure className="snip1559">
          <div className="profile-image">
            <img className="music-logo"
              src="data:image/png;base64,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"
              alt="Yantrik Club"
            />
          </div>
          <figcaption>
            <h3>Designauts</h3>

            <p>
            Designauts is one of the only cultural clubs that doesnt require any natural skill. Everything the club does is taught from scratch and can be done by anyone with zero experience in design or art. The club provides students an opportunity to enhance and show off their design knowledge.
            </p>
            <div className="icons">
              <a href="https://www.facebook.com/designautsiitmandi/">
                <i className="ion-social-facebook"></i>
              </a>
              <a href="https://www.instagram.com/designauts.iitmandi/?hl=en">
                <i className="ion-social-instagram"></i>
              </a>
            </div>
            <button className="button-59" role="button">
              <a href="https://wiki.iitmandi.co.in/p/Designauts" target="_blank">Visit</a>
            </button>
          </figcaption>
        </figure>
        <figure className="snip1559">
          <div className="profile-image">
            <img className="music-logo"
              src="https://wiki.iitmandi.co.in/images/thumb/0/05/Artgeeks.jpeg/300px-Artgeeks.jpeg"
              alt="Nirmaan Club"
            />
          </div>
          <figcaption>
            <h3>Art Geeks</h3>

            <p>
            I Think... I feel... I create... Therefore I am Art is a way of expressing yourself. As a child, we all have expressed ourself by scribbling out our dreams, our fears, our joys, in all, our emotions and ideas.
            </p>
            <div className="icons">
              <a href="https://www.facebook.com/artGeeksIITM/">
                <i className="ion-social-facebook"></i>
              </a>
              <a href="https://www.instagram.com/artgeeks_iitmandi/?hl=en">
                <i className="ion-social-instagram"></i>
              </a>
            </div>
            <button className="button-59" role="button">
              <a href="https://wiki.iitmandi.co.in/p/Art_Geeks" target="_blank">Visit</a>
            </button>
          </figcaption>
        </figure>
        <figure className="snip1559">
          <div className="profile-image">
            <img className="music-logo"
              src="data:image/png;base64,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"
              alt="SAE Club"
            />
          </div>
          <figcaption>
            <h3>Movie Making Club - Perception</h3>

            <p>
            Perception is videography club of IIT Mandi. It is one of the most prominent and influential clubs of the cultural society. It conducts several events, workshops and sessions all year round. It has brought numerous laurels to the institute.
            </p>
            <div className="icons">
              <a href="https://www.facebook.com/perceptioniitmandi/">
                <i className="ion-social-facebook"></i>
              </a>
              <a href="https://www.instagram.com/perception_iitmandi/?hl=en">
                <i className="ion-social-instagram"></i>
              </a>
              <a href="https://www.youtube.com/channel/UCr64cAab6ofazCq-YU_6Ucg">
                <i className="ion-social-youtube"></i>
              </a>
            </div>
            <br />
            <button className="button-59" role="button">
              <a href="https://wiki.iitmandi.co.in/p/Photography_and_Moviemaking_Club" target="_blank">Visit</a>
            </button>
          </figcaption>
        </figure>
      </div>
      <Footer />
    </div>

    } title="TechSoc" />
  );
}

export default Culclub;