// TODO Move link to .env

const LoginButton = () => {
  return (
    <header className="w-full flex justify-end p-5">
      <a
        href="https://discord.com/api/oauth2/authorize?client_id=1107632678829817956&redirect_uri=http%3A%2F%2Flocalhost%3A3001%2Flogin&response_type=code&scope=identify%20guilds"
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded border-white border-2"
      >
        Login to Discord
      </a>
    </header>
  );
};

export default LoginButton;
