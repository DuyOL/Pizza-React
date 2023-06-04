import React, { useState } from "react";
import Logo from "../assets/PizzasLogo.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} alt='Logo Tiệm Bánh' />
        <div className="hiddenLinks">
          <Link to="/"> Trang chủ </Link>
          <Link to="/menu"> Thực đơn </Link>
          <Link to="/about"> Phản hồi </Link>
          <Link to="/contact"> Liên hệ </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Trang chủ </Link>
        <Link to="/menu"> Thực đơn </Link>
        <Link to="/about"> Phản hồi </Link>
        <Link to="/contact"> Liên hệ </Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
