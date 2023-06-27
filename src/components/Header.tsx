import { useState, useEffect } from "react";
import LoginButton from "./LoginButton";
import UserHeader from "./UserHeader";

const Header = ({ user: initialUser }: any) => {
  const [user, setUser] = useState(initialUser);

  useEffect(() => {
    if (!user) {
      fetch("http://localhost:3001/session", {
        credentials: "include", // Include credentials for cross-origin requests
      })
        .then((response) => {
          if (!response.ok) throw new Error("Failed to fetch session");
          return response.json();
        })
        .then((json) => {
          setUser(json.user);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }); // Empty dependency array means this effect runs once on mount

  const username = user?.global_name;
  const avatarURL = `https://cdn.discordapp.com/avatars/${user?.id}/${user?.avatar}.png?size=4096`;

  return user ? (
    <UserHeader username={username} avatarURL={avatarURL} />
  ) : (
    <LoginButton />
  );
};

export default Header;
