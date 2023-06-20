import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const HomePage = ({ user }: any) => {
  const username = user?.global_name;
  const avatarURL = `https://cdn.discordapp.com/avatars/${user?.id}/${user?.avatar}.png?size=4096`;
  const guilds = user?.guilds;

  useEffect(() => {
    if (typeof window != "undefined")
      window.history.replaceState({}, document.title, "/home");
  });
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-indigo-800">
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
      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <div className="text-center">
          <Image
            src="/temp-logo.png"
            alt="Logo"
            className="mx-auto"
            width={150}
            height={150}
          />
          <h1 className="text-6xl text-white font-bold">Angel Bot</h1>
        </div>
      </main>
    </div>
  );
};

export async function getServerSideProps(context: any) {
  const { req, query } = context;
  const { code } = query;

  if (!code) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const response = await fetch(`http://localhost:3001/login?code=${code}`);
  const json = await response.json();

  return {
    props: {
      user: json.user,
    },
  };
}

export default HomePage;
