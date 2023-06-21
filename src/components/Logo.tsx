import Image from "next/image";

const CenterLogo = () => {
  return (
    <div className="flex flex-col items-center justify-center flex-1 px-20 text-center">
      <main className="text-center">
        <Image
          src="/temp-logo.png"
          alt="Logo"
          className="mx-auto"
          width={150}
          height={150}
        />
        <h1 className="text-6xl text-white font-bold">Angel Bot</h1>
      </main>
    </div>
  );
};

export default CenterLogo;
