import Image from "next/image";
import Link from "next/link";

const UserHeader = ({
  username,
  avatarURL,
}: {
  username: string;
  avatarURL: string;
}) => (
  <header className="w-full flex justify-end p-5">
    <Link href="/">
      <div className="flex items-center border-2 border-white bg-red-500 hover:bg-red-700 rounded-full p-2">
        <div>
          <div className="text-white font-bold mr-2">
            Logged in as {username || "user"}
          </div>
        </div>
        <div className="w-16 h-16 rounded-full overflow-hidden">
          <Image
            src={avatarURL || "/default-user.logo.png"}
            alt="Logo"
            className="mx-auto"
            width={64}
            height={64}
          />
        </div>
      </div>
    </Link>
  </header>
);

export default UserHeader;
