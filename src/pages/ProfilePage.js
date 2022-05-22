import React from "react";
import { useParams } from "react-router-dom";

function ProfilePage(props) {
  let { id } = useParams();

  if (!id) id = props.id;

  return (
    <div>
      <h1>ProfilePage id: {id}</h1>
    </div>
  );
}

export default ProfilePage;
