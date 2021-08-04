import React, { useState } from "react";
import SearchHeader from "../SearchHeader";
import UserItem from "../UserItem";

const USER_LIST = Array(33)
  .fill("")
  .map((i, index) => {
    return {
      id: index,
      name: "Amit",
      latestMessage: "Hi ",
    };
  });

function SideBar({ selectedUser, currentUserId, users = [], onUserSelect }) {
  const [filter, setFilter] = useState("");
  const onSearch = (e) => {
    setFilter(e.target.value);
  };
  const filteredUsers = filter
    ? users.filter((user) =>
        user.name.toLowerCase().includes(filter.toLowerCase())
      )
    : users;

  return (
    <div className={"sidebar_container"}>
      <SearchHeader onSearch={onSearch} />
      <div className={"user_list"}>
        {filteredUsers.map((i, index) => {
          return (
            currentUserId !== i.id && (
              <div
                onClick={() => onUserSelect(i, index)}
                className={selectedUser?.id === i.id && "selected_user"}
              >
                <UserItem
                  {...i}
                  key={i.id}
                  avatar={
                    require(`../../assets/images/user${index % 4}.jpg`).default
                  }
                />
              </div>
            )
          );
        })}
      </div>
    </div>
  );
}

export default SideBar;
