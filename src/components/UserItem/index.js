import React from "react";

function UserItem({ name, id, latestMessage, avatar }) {
  return (
    <div className={"user_item"}>
      <img src={avatar} alt="user" className={"avatar"} />
      <div className={"user_msg"}>
        <span className={"name"}>
          {name} {id}
        </span>
        <span className={"latest_message"}>{latestMessage}</span>
      </div>
    </div>
  );
}

export default UserItem;
