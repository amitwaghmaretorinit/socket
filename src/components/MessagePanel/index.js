import React from "react";
import MessageFooter from "../MessageFooter";
import MessageItem from "../MessageItem";
import MessagePanelHeader from "../MessagePanelHeader";

function MessagePanel({selectedUser}) {
  return (
    <div className={"message_panel_container"}>
      <MessagePanelHeader selectedUser={selectedUser} />
      <div className={"message_ground"}>
        {Array(100)
          .fill("")
          .map((i, index) => (
            <MessageItem isSender={index % 10 === 0}>
              <span>
                {index % 5 === 0 ? "MessageMessageMessage" : "Message"}
              </span>
            </MessageItem>
          ))}
      </div>
      <MessageFooter />
    </div>
  );
}

export default MessagePanel;
