import React from "react";
import './Footer.css'
import {
  BrowserRouter,
  Routes,
  Route, Link
} from "react-router-dom";
// import Home from "./pages/Home"
import Techclubs from "./pages/Techclubs";

function Footer() {
  return (

    <BrowserRouter>
    <div>
      <div className="footer-clean">
        <footer>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-sm-4 col-md-3 item">
                <h3>Services</h3>
                  <ul>
                    <li><Link to="/">Web design</Link></li>
                    <li><Link to="/">Development</Link></li>
                    <li><Link to="/">Hosting</Link></li>
                  </ul>
              </div>
                <div className="col-sm-4 col-md-3 item">
                    <h3>About</h3>
                    <ul>
                    <li><Link to="/">Company</Link></li>
                        <li><Link to="/">Team</Link></li>
                        <li><Link to="/">Legacy</Link></li>
                    </ul>
                </div>
                <div className="col-sm-4 col-md-3 item">
                    <h3>Careers</h3>
                    <ul>
                    <li><Link to="/">Job openings</Link></li>
                    <li><Link to="/">Employee success</Link></li>
                    <li><Link to="/">Benefits</Link></li>
                    </ul>
                </div>
                <div className="col-lg-3 item social"><Link to="#"><i className="icon ion-social-facebook"></i></Link><Link to="#"><i className="icon ion-social-twitter"></i></Link><Link to="#"><i className="icon ion-social-snapchat"></i></Link><Link to="#"><i className="icon ion-social-instagram"></i></Link>
                  <p className="copyright">Company Name © 2018</p>
                </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
        {/* <Routes>
          <Route path="/" element={<Techclubs />} />
          <Route path="/" element={<Techclubs />} />
        </Routes> */}
    </BrowserRouter>
  );
}

export default Footer;