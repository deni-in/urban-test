import React from "react";
import { useSelector } from "react-redux";
import { selectLogin } from "../redux/features/login";

function ProfilePage(props) {
  const login = useSelector(selectLogin);

  return (
    <div>
      <h1>{login}</h1>
    </div>
  );
}

export default ProfilePage;
