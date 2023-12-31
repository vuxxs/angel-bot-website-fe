import { useState, useEffect } from "react";
import LoginButton from "./LoginButton";
import UserHeader from "./UserHeader";
import UsageButton from "./UsageButton";
import styles from "@/styles/header.module.css";

const Header = ({ user: initialUser }: any) => {
  const [user, setUser] = useState(initialUser);
  const [key, setKey] = useState(Math.random());

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
  });

  const handleLogout = () => {
    setKey(Math.random());
  };

  const username = user?.global_name;
  const avatarURL = `https://cdn.discordapp.com/avatars/${user?.id}/${user?.avatar}.png?size=4096`;

  return user ? (
    <header className={styles["angel-header"]}>
      <UserHeader
        username={username}
        avatarURL={avatarURL}
        onLogout={handleLogout}
      />
      <UsageButton />
    </header>
  ) : (
    <header className={styles["angel-header"]}>
      <LoginButton />
      <UsageButton />
    </header>
  );
};

export default Header;
