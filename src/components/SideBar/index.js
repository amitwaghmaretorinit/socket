import React from "react";
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
  return (
    <div className={"sidebar_container"}>
      <SearchHeader />
      <div className={"user_list"}>
        {users.map((i, index) => {
          return (
            currentUserId !== i.id && (
              <div onClick={() => onUserSelect(i,index)} className={selectedUser?.id===i.id && 'selected_user'}>
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
