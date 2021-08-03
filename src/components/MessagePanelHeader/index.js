import React from "react";

function MessagePanelHeader({ selectedUser }) {
  return (
    <div className={"message_panel_header"}>
      <div className={"profile_row"}>
        <img alt="user" className={"avatar"} src={selectedUser.avatar} />
        <span className={"user_name"}>{selectedUser.name}</span>
      </div>
    </div>
  );
}

export default MessagePanelHeader;
