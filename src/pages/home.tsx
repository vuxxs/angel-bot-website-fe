import { useEffect } from "react";
import CenterLogo from "@/components/Logo";
import Layout from "@/components/Layout";
import GuildButton from "@/components/GuildButton";
import requestUser from "@/utilities/requestUser";
import OAuthGuild from "@/types/OauthGuild";

// TODO Make a user type
const HomePage = ({ user, guilds }: { user: any; guilds: OAuthGuild[] }) => {
  useEffect(() => {
    if (typeof window != "undefined") {
      window.history.replaceState({}, document.title, "/home");
    }
  }, []); // No dependencies, run only once

  return (
    <Layout user={user}>
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
