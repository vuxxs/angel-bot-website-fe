import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-indigo-800">
      {" "}
      {/* Nearest colour to angelic marian blue*/}
      <header className="w-full flex justify-end p-5">
        <a
          href="https://discord.com/api/oauth2/authorize?client_id=1107632678829817956&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fhome&response_type=code&scope=identify%20guilds"
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded border-white border-2"
        >
          Login to Discord
        </a>
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
}
