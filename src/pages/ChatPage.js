import { useEffect, useState } from "react";

import SideBar from "../components/SideBar";
import io from "socket.io-client";
import { useParams } from "react-router";
import MessagePanel from "../components/MessagePanel";
import { getUsers } from "./helpers";

function ChatPage() {
  const [chatUsers, setChatUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const { userId } = useParams();
  useEffect(() => {
    const socket = io("localhost:4000");
    socket.emit("join", { name: "amit", room: 2 });
    fetchAllUsers();
  }, []);
  const fetchAllUsers = async () => {
    const users = await getUsers();
    setChatUsers(users || []);
    if (users?.length) {
      setSelectedUser({
        ...users[0],
        avatar: require(`../assets/images/user0.jpg`).default,
      });
    }
  };
  const onUserSelect = (user, index) => {
    setSelectedUser({
      ...user,
      avatar: require(`../assets/images/user${index % 3}.jpg`).default,
    });
  };

  return (
    <div className="App">
      <div className={"container"}>
        <div className={"sidebar"}>
          <SideBar
            onUserSelect={onUserSelect}
            currentUserId={parseInt(userId)}
            users={chatUsers}
            selectedUser={selectedUser}
          />
        </div>
        <div className={"message_panel"}>
          {selectedUser && <MessagePanel selectedUser={selectedUser} />}
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
