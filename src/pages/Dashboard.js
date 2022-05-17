import { Container } from "react-bootstrap";
import { Routes, Route, Navigate, useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import AudioBooks from "../components/Dashboard/AudioBooks";
import Bookstore from "../components/Dashboard/Bookstore";
import Favorite from "../components/Dashboard/Favorite";
import Message from "../components/Dashboard/Message";
import Note from "../components/Dashboard/Note";
import Customers from "../components/Dashboard/Customers";
import Schedule from "../components/Dashboard/Schedule";
import Settings from "../components/Dashboard/Settings";
import Support from "../components/Dashboard/Support";
import profile from "../assets/svg/sidebar/profile.svg";
import logout from "../assets/svg/sidebar/logout.svg";
import menu from "../assets/svg/menu.svg";

function Dashboard() {
  const location = useLocation().pathname;
  const [path, setPath] = useState("");

  const openNav = () => {
    document.getElementById("sidebar").style.left = "0px";
  };

  const closeNav = () => {
    document.getElementById("sidebar").style.left = "-300px";
  };

  const changePathAndClose = (path) => {
    if (window.innerWidth <= 992) {
      closeNav();
    }
    setPath(path);
  };

  useEffect(() => {
    setPath(location);
  }, [location]);

  let userDetails = JSON.parse(sessionStorage.getItem("userDetails"));

  return (
    <div className="dashboard">
      <div
        className="dashboard_sidebar hide-scrollBar"
        id="sidebar"
        style={{ background: "#28a745" }}
      >
        <img
          src={profile}
          alt="cancel"
          className="dashboard_sidebar-cancel"
          onClick={closeNav}
        />
        <h2 className="header">SideHustle</h2>

        <div
          style={{
            width: "220px",
            height: "370px",
            marginTop: "50px",
            marginLeft: "-15px",
          }}
        >
          <Link className="link-decor" to="/note">
            <div
              className={
                path.includes("note") || path === "note"
                  ? "dashboard_sidebar-items active"
                  : "dashboard_sidebar-items"
              }
              onClick={() => changePathAndClose("note")}
            >
              <i className="fas fa-home sidebar_icon"></i>
              <p>Dashboard</p>
            </div>
          </Link>
          <Link className="link-decor" to="/customers">
            <div
              className={
                path.includes("customer") || path === "customers"
                  ? "dashboard_sidebar-items active"
                  : "dashboard_sidebar-items"
              }
              onClick={() => changePathAndClose("customers")}
            >
              <i className="fas fa-users sidebar_icon"></i>
              <p>Team members</p>
            </div>
          </Link>
          <Link to="/schedule" className="link-decor">
            <div
              className={
                path.includes("accounts") || path === "schedule"
                  ? "dashboard_sidebar-items active"
                  : "dashboard_sidebar-items"
              }
              onClick={() => changePathAndClose("schedule")}
            >
              <i className="fas fa-briefcase sidebar_icon"></i>
              <p>Clients</p>
            </div>
          </Link>
          <Link className="link-decor" to="/bookstore">
            <div
              className={
                path.includes("bookstore") || path === "bookstore"
                  ? "dashboard_sidebar-items active"
                  : "dashboard_sidebar-items"
              }
              onClick={() => changePathAndClose("bookstore")}
            >
              <i class="fas fa-boxes sidebar_icon"></i>
              <p>Products</p>
            </div>
          </Link>
        </div>
        <hr />

        <Link to="/signup">
          <div
            className="dashboard_sidebar-items logout" //onClick={logOut}
          >
            <img src={logout} alt="icon" />
            <p>Logout</p>
          </div>
        </Link>
      </div>
      <div className="dashboard_main">
        <Container>
          <div className="dashboard_main-nav">
            <img
              src={menu}
              alt="menu"
              className="dashboard_main-nav-menu"
              onClick={() => openNav()}
            />
          </div>
        </Container>
        <div
          style={{
            height: "auto",
            marginTop: "-80px",
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="/note" />} />
            <Route path="/note" element={<Note />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/schedule/*" element={<Schedule />} />
            <Route path="/audio-books/*" element={<AudioBooks />} />
            <Route path="/bookstore/*" element={<Bookstore />} />
            <Route path="/favorite/*" element={<Favorite />} />
            <Route path="/message/*" element={<Message />} />
            <Route path="/settings/*" element={<Settings />} />
            <Route path="/support/*" element={<Support />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
