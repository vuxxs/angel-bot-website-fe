const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-indigo-800">
      {children}
    </div>
  );
};

export default Layout;
