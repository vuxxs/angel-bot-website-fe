import { useEffect } from "react";
import CenterLogo from "@/components/Logo";
import Layout from "@/components/Layout";
import { Guild } from "discord.js";
import GuildButton from "@/components/GuildButton";
import Header from "@/components/Header";
import requestUser from "@/utilities/requestUser";

// TODO Update user type to User when global_name is released by discord.js team
const HomePage = ({ user, guilds }: { user: any; guilds: Guild[] }) => {
  useEffect(() => {
    if (typeof window != "undefined") {
      window.history.replaceState({}, document.title, "/home");
    }
  }, []); // No dependencies, run only once

  return (
    <Layout>
      <Header user={user} />
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
  return requestUser(context);
}

export default HomePage;
