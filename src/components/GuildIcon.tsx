import OAuthGuild from "@/types/OauthGuild";
import Image from "next/image";

const GuildIcon = ({ guild }: { guild: OAuthGuild | undefined }) => (
  <div className="flex-shrink-0">
    <Image
      className="rounded-full overflow-hidden relative"
      src={
        `https://cdn.discordapp.com/icons/${guild?.id}/${guild?.icon}.png?size=4096` ||
        "/public/temp-default-server-icon.png"
      }
      alt={"guild_icon"}
      width={128}
      height={128}
    />
  </div>
);

export default GuildIcon;
