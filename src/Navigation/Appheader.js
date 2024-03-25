import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import gymlogo from "../images/gymlogo.png";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
// import "../App.css";


const Appheader = () => {
  const [displayusername, displayusernameupdate] = useState("");
  const [showmenu, showmenuupdateupdate] = useState(false);
  const usenavigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/register") {
      showmenuupdateupdate(false);
    } else {
      showmenuupdateupdate(true);
      let username = sessionStorage.getItem("username");
      if (username === "" || username === null) {
        usenavigate("/login");
      } else {
        displayusernameupdate(username);
      }
    }
  }, [location]);
  return (
    <div>
      {showmenu && (
        <Navbar expand="lg" className="navbar">
        <Container fluid>
          <Navbar.Brand href={"/"}>
            <img alt="logo" src={gymlogo} className="navbar-logo" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="bg-warning text-dark"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="text-center mx-auto navbar-menu-container">
              <Nav.Link className="navbar-menu-items" href={"/"}>
                Home
              </Nav.Link>
              <Nav.Link
                className="navbar-menu-items"
                href={"/poseEstimation"}
              >
                Pose Estimation
              </Nav.Link>
              <Nav.Link
                className="navbar-menu-items"
                href={"/trainingSchedule"}
              >
                Training Schedule
              </Nav.Link>
              <Nav.Link
                className="navbar-menu-items"
                href={"/nearestLocation"}
              >
                Nearest Location
              </Nav.Link>
              <Nav.Link className="navbar-menu-items" href={"/dietPlans"}>
                Diet Plans
              </Nav.Link>
              <Nav.Link className="navbar-menu-items" href={"/tutorials"}>
                Tutorials
              </Nav.Link>
            </Nav>
            <Nav className="text-center ml-auto me-md-4 navbar-menu-container-2">
              <NavDropdown
                title={`Welcome ${displayusername}`}
                id="basic-nav-dropdown"
                data-bs-theme="dark"
                className="dropdown-user"
                align={{ md: "end" }}
              >
                <NavDropdown.Item
                  className="navbar-menu-items-2 text-center"
                  href={"/aboutUs"}
                >
                  About Us
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="navbar-menu-items-2 text-center"
                  href={"/login"}
                >
                  Log Out
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
       </Navbar>
        // <Navbar expand="lg" fixed="top" style={{backgroundColor: "rgba(85, 45, 2, 0.1)"}}>
        //   <Container fluid>
        //     <Navbar.Brand > 
        //     <Link to={'/'}>
        //     <img
        //         alt="gymlogo"
        //         src={gymlogo} // Use the imported image here
        //         width="50"
        //         height="40"
        //         className="d-inline-block align-top"
        //       />{" "}
        //       Virtual Trainer
        //     </Link>
        //     </Navbar.Brand>
        //     <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light" />
        //     <Navbar.Collapse id="basic-navbar-nav">
        //       <Nav  className="mx-auto " >
        //         {/* <Nav className="navitem"><Link to={'/'}>Home</Link></Nav> */}
        //         <Nav className="navitem ">
        //           <Link to={"/PoseEstimation"}  className="text-warning fs-5 fw-semibold">Pose Estimation</Link>
        //         </Nav>
        //         <Nav className="navitem text-warning">
        //           <Link to={"/Dietplans"} className="text-warning fs-5 fw-semibold">Diet plans</Link>
        //         </Nav>
        //         <Nav className="navitem">
        //           <Link to={"TrainingSchedule"}  className="text-warning fs-5 fw-semibold">Training Schedule</Link>
        //         </Nav>
        //         <Nav className="navitem">
        //           <Link to={"/Tutorials"}  className="text-warning fs-5 fw-semibold">Tutorial Exercise</Link>
        //         </Nav>
        //         <Nav className="navitem">
        //           <Link to={"/Nearestlocation"}  className="text-warning fs-5 fw-semibold">Nearest location</Link>
        //         </Nav>
        //         <Nav className="navitem">
        //           <Link to={"/AboutUs"}  className="text-warning fs-5 fw-semibold">About Us</Link>
        //         </Nav>
        //       </Nav>
        //       <Nav className="ms-auto">
        //             <span
        //             style={{
        //             //     marginLeft: "5%",
        //                 marginRight: "5%",
        //                 color: "white",
        //             }}
        //             >
        //             Welcome <b>{displayusername}</b>
        //             </span>
        //             <Link 
        //             to={"/login"}>
        //             Logout
        //             </Link>
        //         </Nav>
        //     </Navbar.Collapse>
        //   </Container>
        // </Navbar>
      )
    }
    </div>
  );
};

export default Appheader;

// <Navbar className="bg-body-tertiary">
//     <Container>
//         <Navbar.Brand href="#home">
//             <img
//             alt="gymlogo"
//             src="./src/images/gymlogo.png"
//             width="30"
//             height="30"
//             className="d-inline-block align-top"
//             />{' '}
//             React Bootstrap
//         </Navbar.Brand>
//     </Container>
// </Navbar>
