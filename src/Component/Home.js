import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import backgroundImage from "../images/homebg.png";
// import homebg from "../src/images/homebg.png";

const Home = () => {
  const usenavigate = useNavigate();
  const [customerlist, listupdate] = useState(null);

  useEffect(() => {
    // let jwttoken = sessionStorage.getItem('jwttoken');
    // fetch("https://localhost:44308/Customer", {
    //     headers: {
    //         'Authorization': 'bearer ' + jwttoken
    //     }
    // }).then((res) => {
    //     return res.json();
    // }).then((resp) => {
    //     listupdate(resp);
    // }).catch((err) => {
    //     console.log(err.messsage)
    // });
  }, []);

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh", // Ensure the image covers the entire viewport height
          backgroundAttachment: "fixed",
        }}
      >
        <h1 className="text-center">Welcome to Home</h1>
      </div>
    </div>
  );
};

export default Home;
