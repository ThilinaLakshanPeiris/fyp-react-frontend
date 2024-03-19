import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import backgroundImage from "../images/homebg.png";
import Container from "react-bootstrap/Container";



const Nearestlocation = () => {
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
      <div className="bgimg"
        // style={{
        //   backgroundImage: `url(${backgroundImage})`,
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        //   minHeight: "100vh", // Ensure the image covers the entire viewport height
        //   backgroundAttachment: "fixed",
        // }}
      >
        <Container style={{
          paddingTop :"8%"
        }}>
            <div >
                {/* <h1 className="text-center">Welcome to Nearest location</h1> */}
                {/* <button type="button" className="btn btn-primary">Nearest location</button> */}
            <div className="container-fluid">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d808.9847142653869!2d79.85584393035556!3d6.895081826313468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25bdee411b6cd%3A0xeca9b65b5965c56b!2s10%20Trelawney%20Pl%2C%20Colombo%2000400!5e0!3m2!1sen!2slk!4v1710832341699!5m2!1sen!2slk"
                className="w-100 border-dark" height="600" loading="lazy" 
                ></iframe>
            </div>
            </div>
        </Container>
         
      </div>
    </div>
        
    );
}

export default Nearestlocation;