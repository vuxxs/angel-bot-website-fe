import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import OAuthGuild from "@/types/OauthGuild";
import GuildInfo from "@/components/GuildInfo";
import GuildIcon from "@/components/GuildIcon";

const GuildPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [guilds, setguilds] = useState<OAuthGuild[] | null>(null);
  const guild = guilds?.find((guild) => guild.id === id);
  const permissionsValue = BigInt(guild?.permissions_new || "0");

  // TODO move check to home
  // Check if the user has the 'ADMINISTRATOR' permission
  const isAdmin: string | boolean =
    (permissionsValue & BigInt(8)) === BigInt(8);

  useEffect(() => {
    if (!guilds) {
      fetch("http://localhost:3001/session", {
        credentials: "include", // Include credentials for cross-origin requests
      })
        .then((response) => {
          if (!response.ok) throw new Error("Failed to fetch session");
          return response.json();
        })
        .then((json) => {
          setguilds(json.guilds);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  });

  return (
    <Layout>
      <div className="p-6 fixed top-5 bottom-5 left-5 right-5 overflow-y-auto bg-red-700 rounded-xl shadow-md flex flex-col items-center space-y-4">
        <GuildIcon guild={guild} />
        <GuildInfo guild={guild} isAdmin={isAdmin} />
      </div>
    </Layout>
  );
};

export default GuildPage;
