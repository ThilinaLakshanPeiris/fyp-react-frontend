import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";


const Appfooter = () => {
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
        {showmenu && <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea
        quis molestias. Fugiat pariatur maxime quis culpa corporis vitae
        repudiandae aliquam voluptatem veniam, est atque cumque eum delectus
        sint!
      </p>}
    </div>
  );
};

export default Appfooter;
