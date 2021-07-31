import React from "react";

function MessageItem({ isSender, msg, children }) {
  return (
    <div
      className={"message_item"}
      style={{
        flexDirection: isSender ? "row-reverse" : "row",
      }}
    >
      {children}
    </div>
  );
}

export default MessageItem;
