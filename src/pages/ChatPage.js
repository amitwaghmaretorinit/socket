import { useEffect, useState } from "react";

import SideBar from "../components/SideBar";
import io from "socket.io-client";
import { useParams } from "react-router";
import MessagePanel from "../components/MessagePanel";
import { getUsers } from "./helpers";

function ChatPage() {
  const [chatUsers, setChatUsers] = useState([]);
  const { userId } = useParams();
  useEffect(() => {
    const socket = io("localhost:4000");
    socket.emit("join", { name: "amit", room: 2 });
    fetchAllUsers();
  }, []);
  const fetchAllUsers = async () => {
    const users = await getUsers();
    setChatUsers(users || []);
  };

  return (
    <div className="App">
      <div className={"container"}>
        <div className={"sidebar"}>
          <SideBar currentUserId={parseInt(userId)} users={chatUsers} />
        </div>
        <div className={"message_panel"}>
          <MessagePanel />
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
