import logout from "@/utilities/logout";
import Image from "next/image";
import { useRouter } from "next/router";

const UserHeader = ({
  username,
  avatarURL,
  onLogout,
}: {
  username: string;
  avatarURL: string;
  onLogout: () => void;
}) => {
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push("/");
    onLogout();
  };

  return (
    <div
      onClick={handleLogout}
      className="bg-red-500 hover:bg-red-700 flex items-center border-2 border-white rounded-full p-2 h-11 cursor-pointer"
    >
      <div className="text-white font-bold mr-2">
        Logged in as {username || "user"}
      </div>
      <div className="w-8 h-8 rounded-full overflow-hidden relative">
        <Image
          // FIXME Update to default-user-logo.png
          src={avatarURL || "/temp-default-user-logo.png"}
          alt="Logo"
          fill
        />
      </div>
    </div>
  );
};

export default UserHeader;
