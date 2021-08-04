import React, { useState } from "react";

function MessageFooter({ onSend = () => {} }) {
  const [text, setText] = useState("");
  const onTextChange = (e) => {
    setText(e.target.value);
  };
  const onSendHandler = () => {
    onSend(text);
    setText("");
  };
  return (
    <div className={"message_footer"}>
      <div style={{ display: "flex" }}>
        <input
          value={text}
          onChange={onTextChange}
          className={"message_footer_input"}
          placeholder={"Enter Message..."}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onSendHandler();
            }
          }}
        />

        <button onClick={onSendHandler} className={"send_btn"}>
          Send
        </button>
      </div>
    </div>
  );
}

export default MessageFooter;
