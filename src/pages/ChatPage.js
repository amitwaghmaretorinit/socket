import { useEffect, useState } from "react";

import SideBar from "../components/SideBar";
import io from "socket.io-client";
import { useParams } from "react-router";
import MessagePanel from "../components/MessagePanel";
import { getUsers } from "./helpers";
const socket = io("localhost:4000");

function ChatPage() {
  const [chatUsers, setChatUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const { userId } = useParams();

  useEffect(() => {
    socket.emit("join", { fromId: userId });
    fetchAllUsers();
  }, []);

  useEffect(() => {
    if (selectedUser) {
      const link = "message" + selectedUser?.id;
      socket.on(link, ({ fromId, toId, msg }) => {});
    }
  }, [selectedUser?.id]);
 
  const fetchAllUsers = async () => {
    const users = await getUsers();
    setChatUsers(users || []);
    if (users?.length) {
      setSelectedUser({
        ...users?.filter((i) => i.id !== parseInt(userId))[0],
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

  const onSend = (txt) => {
    socket.emit("send", {
      fromId: parseInt(userId),
      toId: selectedUser?.id,
      msg: txt,
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
          {selectedUser && (
            <MessagePanel onSend={onSend} selectedUser={selectedUser} />
          )}
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
