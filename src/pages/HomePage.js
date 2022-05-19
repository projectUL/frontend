import React from "react";
import { useNavigate } from "react-router-dom";
import MessageBox from "../components/UI/MessageBox";
function HomePage() {
  const content =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore ";
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
