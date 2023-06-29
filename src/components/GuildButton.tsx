import OAuthGuild from "@/types/OauthGuild";
import Image from "next/image";
import Link from "next/link";

const GuildButton = ({ guild }: { guild: OAuthGuild }) => {
  const { id, name, icon } = guild;
  const iconUrl = icon
    ? `https://cdn.discordapp.com/icons/${id}/${icon}.png`
    : "/temp-default-server-icon.png"; // FIXME Update to default-server-icon.png

  return (
    <Link href={`/guild/${id}`}>
      <div className="flex items-center justify-center p-4 m-4 rounded-full bg-slate-700 hover:bg-slate-600 border-green-600 border-2">
        <Image
          className="rounded-full"
          src={iconUrl}
          alt={name}
          width={64}
          height={64}
        />
        <span className="ml-4 text-white">{name}</span>
      </div>
    </Link>
  );
};

export default GuildButton;
