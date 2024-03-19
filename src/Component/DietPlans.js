import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";


const Dietplans = () => {
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
            <div className="bgimg">
        <Container className = "content">
                 <h1 className="text-center text-light">Welcome to Dietplans</h1>
             <button type="button" className="btn btn-primary">Dietplans</button>
            
        </Container>

           
        </div>
        </div>
        
    );
}

export default Dietplans;