import Image from "next/image";

const CenterLogo = () => {
  return (
    <div className="flex flex-col items-center justify-center flex-1 px-20 text-center">
      <main className="text-center">
        <Image
          // FIXME Update to logo.png
          src="/temp-logo.png"
          alt="Logo"
          className="mx-auto rounded-full"
          width={300}
          height={300}
        />
        <h1 className="text-6xl text-white font-bold m-2">Angel Bot</h1>
      </main>
    </div>
  );
};

export default CenterLogo;
