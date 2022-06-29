import React from "react";
import { useNavigate } from "react-router-dom";
import MessageBox from "../components/UI/MessageBox";

function HomePage() {
  const content = "Thousands of students and companies have found a common language among themselves.";
  let navigate = useNavigate();

  return (
    <div className="mainHome">
      <MessageBox
        title="Find an interesting job or gifted students"
        content={content}
        btn_options={{
          onClick: () => {
            return navigate("/register");
          },
        }}
        btn_name="Join our group"
      />
      <div className="bgImgHome"></div>
    </div>
  );
}

export default HomePage;
