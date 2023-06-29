import OAuthGuild from "@/types/OauthGuild";

const GuildInfo = ({
  guild,
  isAdmin,
}: {
  guild: OAuthGuild | undefined;
  isAdmin: boolean;
}) => (
  <div className="p-6 w-3/4 mx-auto my-20 rounded-xl shadow-md flex flex-col items-center space-y-4 bg-red-500">
    <div className="text-xl text-black font-bold flex items-center justify-center">
      {guild?.name}
    </div>
    <div className="text-white-500 font-bold flex items-center justify-center">
      isAdmin: {isAdmin.toString()}
    </div>
    <div className="text-white-500 font-bold flex items-center justify-center">
      ID: {guild?.id}
    </div>
    <div className="text-white-500 font-bold flex items-center justify-center">
      Features
    </div>
    <div className="text-white-500 flex items-center justify-center text-center">
      {`[ ${guild?.features?.join(" | ")} ]`}
    </div>
  </div>
);

export default GuildInfo;
