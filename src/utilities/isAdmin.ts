import OAuthGuild from "@/types/OauthGuild";

// Check if the user has the 'ADMINISTRATOR' permission
export default function isAdmin(guild: OAuthGuild | undefined) {
  const permissionsValue = BigInt(guild?.permissions_new || "0");
  return (permissionsValue & BigInt(8)) === BigInt(8);
}
