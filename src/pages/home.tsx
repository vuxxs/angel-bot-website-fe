import { useEffect } from "react";
import UserHeader from "@/components/UserHeader";
import CenterLogo from "@/components/Logo";
import Layout from "@/components/Layout";
import { Guild, User } from "discord.js";
import GuildButton from "@/components/GuildButton";

// FIXME Update user type to User when global_name is released by discord.js team
const HomePage = ({ user, guilds }: { user: any; guilds: Guild[] }) => {
  const username = user?.global_name;
  const avatarURL = `https://cdn.discordapp.com/avatars/${user?.id}/${user?.avatar}.png?size=4096`;

  useEffect(() => {
    if (typeof window != "undefined") {
      window.history.replaceState({}, document.title, "/home");
    }
  }, []); // No dependencies, run only once

  return (
    <Layout>
      <UserHeader username={username} avatarURL={avatarURL} />
      <CenterLogo />
      <div className="flex flex-wrap justify-center">
        {guilds.map((guild) => (
          <GuildButton key={guild.id} guild={guild} />
        ))}
      </div>
    </Layout>
  );
};

export async function getServerSideProps(context: any) {
  const { req, query } = context;
  const { code } = query;

  if (!code) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  try {
    const response = await fetch(`http://localhost:3001/login?code=${code}`);

    if (!response.ok) {
      // console.error("Server responded with an error", response.status);
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }
    const json = await response.json();

    console.log(json.guilds);

    return {
      props: {
        user: json.user,
        guilds: json.guilds,
      },
    };
  } catch (error) {
    console.error("An error occurred while fetching user data", error);
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
}

export default HomePage;
