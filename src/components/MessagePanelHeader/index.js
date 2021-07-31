import React from "react";

function MessagePanelHeader() {
  return (
    <div className={"message_panel_header"}>
      <div className={"profile_row"}>
        <img
          alt="user"
          className={"avatar"}
          src={require("../../assets/images/user1.jpg").default}
        />
        <span className={"user_name"}>Amit</span>
      </div>
    </div>
  );
}

export default MessagePanelHeader;
