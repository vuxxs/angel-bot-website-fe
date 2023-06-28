import Image from "next/image";
import Link from "next/link";

const UserHeader = ({
  username,
  avatarURL,
}: {
  username: string;
  avatarURL: string;
}) => (
  <Link href="/">
    <div className="bg-red-500 hover:bg-red-700 flex items-center border-2 border-white rounded-full p-2 h-11">
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
  </Link>
);

export default UserHeader;
