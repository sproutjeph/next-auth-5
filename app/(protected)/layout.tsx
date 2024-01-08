import { Navbar } from "./_component/Navbar";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return (
    <div className="h-full w-full flex flex-col gap-y-10 items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-pink-400 to-rose-800">
      <Navbar />
      {children}
    </div>
  );
};

export default ProtectedLayout;
