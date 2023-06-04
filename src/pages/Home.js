import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizzas.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> James Maridista </h1>
        <p> PIZZA ngon - giá sinh viên</p>
        <Link to="/menu">
          <button> Đặt hàng ngay </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
