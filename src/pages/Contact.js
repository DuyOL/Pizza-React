import React from "react";
import PizzaLeft from "../assets/pizzaLeft.jpg";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <h1> Liên hệ với chúng tôi</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Họ và tên</label>
          <input name="name" placeholder="Nhập tên đầy đủ ..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Nhập email..." type="email" />
          <label htmlFor="message">Tin nhắn</label>
          <textarea
            rows="6"
            placeholder="Nhập tin nhắn..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Gửi tin nhắn</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
