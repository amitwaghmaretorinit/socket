import React, { useState } from "react";

function MessageFooter({ onSend = () => {} }) {
  const [text, setText] = useState("");
  const onTextChange = (e) => {
    setText(e.target.value);
  };
  const onSendHandler = () => {
    onSend(text);
  };
  return (
    <div className={"message_footer"}>
      <div style={{ display: "flex" }}>
        <input
          value={text}
          onChange={onTextChange}
          className={"message_footer_input"}
          placeholder={"Enter Message..."}
        />
        <button onClick={onSendHandler} className={"send_btn"}>
          Send
        </button>
      </div>
    </div>
  );
}

export default MessageFooter;
