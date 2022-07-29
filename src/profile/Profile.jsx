import React from "react";

function Profile({ fullName, description, children }) {
  return (
    <div>
      <h1 style={{ color: "red" }}>{fullName} </h1>
      <h2></h2>
      <p>{description}</p>
      <img src={children} alt="" />
    </div>
  );
}

export default Profile;
