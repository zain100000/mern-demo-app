import React from "react";
import UserList from "../components/UserList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Maxim",
      image:
        "https://cdn.pixabay.com/photo/2023/11/17/21/43/trail-8395089_1280.jpg",

      places: 3,
    },
  ];

  return (
    <div>
      <UserList items={USERS} />
    </div>
  );
};

export default Users;
