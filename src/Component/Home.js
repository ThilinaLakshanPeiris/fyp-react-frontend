import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import deadLiftPic from "../images/deadLift.png";
import { Link } from "react-router-dom";
import backgroundImage from "../images/homebg.png";

const Home = () => {
  return (
    <div>
      {
        <div className="bgimg">
          <div className="main-home-container container-fluid d-flex justify-content-center align-items-center">
            <div className="home-container row">
              <div className="col-md-6">
                <img alt="#" src={deadLiftPic} className="deadLiftPic" />
              </div>
              <div className="col-md-6">
                <div className="home-container-heading grid text-center">
                  <div
                    className="g-col-10"
                    style={{
                      color: "white",
                      fontSize: "3.5rem",
                      fontWeight: "bold",
                    }}
                  >
                    Check your Pose
                  </div>
                  <div
                    className="g-col-10"
                    style={{
                      color: "white",
                      fontSize: "3.5rem",
                    }}
                  >
                    {" "}
                    Right now
                  </div>
                  <div
                    className="g-col-10 mt-1"
                    style={{
                      color: "white",
                      fontSize: "1.8rem",
                    }}
                  >
                    You can check and estimate your pose virtually
                  </div>
                  <div className="g-col-10 mt-4">
                    <Link to={"/poseEstimation"}>
                      <button type="button" className="try-now-btn">
                        Try Now!
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default Home;



// import { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import backgroundImage from "../images/homebg.png";
// // import homebg from "../src/images/homebg.png";

// const Home = () => {
//   const usenavigate = useNavigate();
//   const [customerlist, listupdate] = useState(null);

//   useEffect(() => {
//     // let jwttoken = sessionStorage.getItem('jwttoken');
//     // fetch("https://localhost:44308/Customer", {
//     //     headers: {
//     //         'Authorization': 'bearer ' + jwttoken
//     //     }
//     // }).then((res) => {
//     //     return res.json();
//     // }).then((resp) => {
//     //     listupdate(resp);
//     // }).catch((err) => {
//     //     console.log(err.messsage)
//     // });
//   }, []);

//   return (
//     <div>
//       <div
//         style={{
//           backgroundImage: `url(${backgroundImage})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           minHeight: "100vh", // Ensure the image covers the entire viewport height
//           backgroundAttachment: "fixed",
//         }}
//       >
//         <h1 className="text-center">Welcome to Home</h1>
//       </div>
//     </div>
//   );
// };

// export default Home;
