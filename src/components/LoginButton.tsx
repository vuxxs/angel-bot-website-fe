// TODO Move link to .env

const LoginButton = () => {
  return (
    <a
      href="https://discord.com/api/oauth2/authorize?client_id=1107632678829817956&redirect_uri=http%3A%2F%2Flocalhost%3A3001%2Flogin&response_type=code&scope=identify%20guilds"
      className="bg-red-500 hover:bg-red-700 angel-square-button"
    >
      Login to Discord
    </a>
  );
};

export default LoginButton;
