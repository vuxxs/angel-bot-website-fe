import { useRouter } from "next/router";

const ErrorPage = () => {
  const router = useRouter();

  // Redirect to error page
  if (typeof window !== "undefined") {
    router.replace("/404");
  }

  return null; // Render nothing on the server
};

export async function getServerSideProps() {
  return {
    props: {}, // Return empty props object
  };
}

export default ErrorPage;
