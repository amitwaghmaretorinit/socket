import React from "react";
import MessageFooter from "../MessageFooter";
import MessageItem from "../MessageItem";
import MessagePanelHeader from "../MessagePanelHeader";

function MessagePanel({ selectedUser, onSend, messages = [] }) {
  return (
    <div className={"message_panel_container"}>
      <MessagePanelHeader selectedUser={selectedUser} />
      {!messages?.length && (
        <div className={"no_messages"}>
          <span>This is you first conversation with {selectedUser?.name}</span>
        </div>
      )}
      {!!messages?.length && (
        <div className={"message_ground"}>
          {messages?.map((i, index) => (
            <MessageItem isSender={i.sender !== selectedUser.id}>
              <span id={`message_${index}`}> {i.msg}</span>
            </MessageItem>
          ))}
        </div>
      )}
      <MessageFooter onSend={onSend} />
    </div>
  );
}

export default MessagePanel;
