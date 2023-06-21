import { Guild } from "discord.js";
import Image from "next/image";
import Link from "next/link";

const GuildButton = ({ guild }: { guild: Guild }) => {
  const { id, name, icon } = guild;
  const iconUrl = `https://cdn.discordapp.com/icons/${id}/${icon}.png`;

  return (
    <Link href={`/guild/${id}`}>
      <a className="flex items-center justify-center p-4 m-4 rounded-full bg-blue-500 hover:bg-blue-700">
        <Image src={iconUrl} alt={name} width={64} height={64} />
        <span className="ml-4 text-white">{name}</span>
      </a>
    </Link>
  );
};

export default GuildButton;
