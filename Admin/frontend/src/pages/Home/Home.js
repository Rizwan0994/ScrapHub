import React from "react";
import { RiProductHuntLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./Home.scss";
import heroImg from "../../assets/inv-img.png";
import { ShowOnLogin, ShowOnLogout } from "../../components/protect/HiddenLink";

const Home = () => {
  return (
    <div className="home">
      <nav className="container --flex-between ">
        <div className="">
          {/* <RiProductHuntLine size={35} /> */}
        
          <div >
          <img src="https://i.postimg.cc/fLS6VdNv/Green-Black-Sustainable-Energy-Solutions-Logo-removebg-preview.png" alt="logo" style={{ position: 'absolute', top: 0, left: 0, height: '270px', margin: '10px', }} />

    </div>

          
        </div>

        <ul className="home-links">
          <ShowOnLogout>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ShowOnLogout>
          <ShowOnLogout>
            <li>
              <button className="--btn --btn-primary">
                { <Link to="/login">Login</Link> }
              </button>
            </li>
          </ShowOnLogout>
          <ShowOnLogin>
            { <li>
              <button className="--btn xbtn">
                <Link to="/dashboard">Dashboard</Link>
              </button>
            </li> }

          </ShowOnLogin>
        </ul>
      </nav>
      {/* HERO SECTION */}
      <section className="container hero">
        <div className="hero-text">
          <h1>ScrapHub, A Digital Market Place For Scrap Sales Purchase</h1>
          <p>
          Develop digital platform where people can come to sell and buy the scrap online.
          Collect and recycle the scrap and keep this valuable material in the loop.
          </p>
        </div>

        <div className="hero-image">
          <img src={"https://i.postimg.cc/N0j6K2bb/pexels-photo-9324359-removebg-preview.png"} alt="Inventory" />
        </div>
      </section>
    </div>
  );
};



export default Home;
