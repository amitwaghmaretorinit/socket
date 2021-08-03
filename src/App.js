import { useEffect } from "react";

import SideBar from "./components/SideBar";
import MessagePanel from "./components/MessagePanel";
import io from "socket.io-client";
import "./App.css";

function App() {
  useEffect(() => {
    const socket = io("localhost:4000");
    socket.emit("join", { name: "amit", room: 2 });
  }, []);

  return (
    <div className="App">
      <div className={"container"}>
        <div className={"sidebar"}>
          <SideBar />
        </div>
        <div className={"message_panel"}>
          <MessagePanel />
        </div>
      </div>
    </div>
  );
}

export default App;
