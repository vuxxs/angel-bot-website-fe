import LoginButton from "@/components/LoginButton";
import CenterLogo from "@/components/Logo";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-indigo-800">
      <LoginButton />
      <CenterLogo />
    </div>
  );
}
