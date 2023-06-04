import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1>Phản hồi của chúng tôi</h1>
        <p>
          "Chào mừng đến với cửa hàng Pizza của chúng tôi!"<br />
          <br />
          Chúng tôi tự hào là một cửa hàng Pizza đặc biệt, nơi chúng tôi mang đến cho bạn những chiếc bánh pizza ngon và đậm đà. Với niềm đam mê và tận tâm, chúng tôi luôn cố gắng tạo ra những chiếc pizza chất lượng nhất để làm hài lòng vị giác của bạn.<br />
          <br />
          Mục tiêu của chúng tôi là tạo ra một không gian ấm cúng và thân thiện cho khách hàng. Dù bạn muốn dùng tại chỗ hay giao hàng, chúng tôi muốn bạn cảm thấy như ở nhà và tận hưởng mỗi khoảnh khắc. Chúng tôi luôn chú trọng đến dịch vụ khách hàng xuất sắc, đảm bảo rằng kinh nghiệm pizza của bạn vượt xa mong đợi.<br />
          <br />
          Cảm ơn bạn đã lựa chọn cửa hàng pizza của chúng tôi. Chúng tôi mong được phục vụ bạn và tạo ra những khoảnh khắc đáng nhớ với những chiếc pizza ngon lành của chúng tôi. Hãy đến thăm chúng tôi ngay hôm nay và thưởng thức trọn vẹn trải nghiệm pizza tuyệt vời!
        </p>
      </div>
    </div>
  );
}

export default About;
