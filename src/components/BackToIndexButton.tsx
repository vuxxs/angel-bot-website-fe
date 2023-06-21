import { useRouter } from "next/router";

const BackToIndexButton = () => {
  const router = useRouter();

  const goBackHome = () => {
    router.push("/");
  };
  return (
    <div className="text-center">
      <h1 className="text-6xl text-white font-bold">404</h1>
      <p className="text-white">Page Not Found</p>
      <button
        onClick={goBackHome}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mt-2 rounded border-white border-2"
      >
        Back to Start
      </button>
    </div>
  );
};

export default BackToIndexButton;
