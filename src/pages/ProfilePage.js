import React from "react";
import { useParams } from "react-router-dom";

function ProfilePage() {
  const { id } = useParams();
  return (
    <div>
      <h1>ProfilePage id: {id}</h1>
    </div>
  );
}

export default ProfilePage;
