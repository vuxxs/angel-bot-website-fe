import Header from "./Header";

const Layout = ({
  children,
  user,
}: {
  children: React.ReactNode;
  user?: any;
}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-indigo-800">
      <Header user={user} />
      {children}
    </div>
  );
};

export default Layout;
