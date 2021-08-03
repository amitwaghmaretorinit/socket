import React, { useState } from "react";
import { useHistory } from "react-router";
import { registerUser } from "./helpers";

function SignIn() {
  const [info, setInfo] = useState({ name: "", email: "" });
  const history = useHistory();
  const onTextChange = (e) => {
    setInfo({ ...info, [e.target.id]: e.target.value });
  };

  const onRegisterUser = async () => {
    const res = await registerUser({ ...info });
    if (!res) {
      alert("Something went wrong !");
      return;
    }
    history.push(`/chat/${res.id}`);
  };

  const { name, email } = info;
  return (
    <div className={"signin_container"}>
      <div className={"signin_sub_container"}>
        <div className={"signin"}>
          <div>Chat App</div>
          <input
            value={name}
            id={"name"}
            onChange={onTextChange}
            placeholder={"Enter Name"}
          />
          <input
            id={"email"}
            value={email}
            onChange={onTextChange}
            placeholder={"Enter Email"}
          />
          <button onClick={onRegisterUser}>start chat</button>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
