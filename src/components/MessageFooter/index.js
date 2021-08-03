import React from "react";

function MessageFooter() {
  return (
    <div className={"message_footer"}>
      <div style={{ display: "flex" }}>
        <input
          className={"message_footer_input"}
          placeholder={"Enter Message..."}
        />
        <button className={'send_btn'}>Send</button>
      </div>
    </div>
  );
}

export default MessageFooter;
