import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import OAuthGuild from "@/types/OauthGuild";
import GuildInfo from "@/components/GuildInfo";
import GuildIcon from "@/components/GuildIcon";
import requestUserAndGuilds from "@/utilities/requestUserAndGuilds";
import isAdmin from "@/utilities/isAdmin";

const GuildPage = ({ guilds }: { guilds: OAuthGuild[] }) => {
  const router = useRouter();
  const { id } = router.query;
  const guild = guilds?.find((guild) => guild.id === id);
  const admin = isAdmin(guild);

  // TODO push the red below Header
  return (
    <Layout>
      <div className="p-6 fixed top-5 bottom-5 left-5 right-5 overflow-y-auto bg-red-700 rounded-xl shadow-md flex flex-col items-center space-y-4">
        <GuildIcon guild={guild} />
        <GuildInfo guild={guild} isAdmin={admin} />
      </div>
    </Layout>
  );
};

export async function getServerSideProps(context: any) {
  return requestUserAndGuilds(context);
}

export default GuildPage;
