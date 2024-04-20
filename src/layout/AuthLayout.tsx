interface PropsI {
  children: React.ReactNode;
  title: string;
}
const AuthLayout = ({ title, children }: PropsI) => {
  return (
    <div className=" flex  border-b-2 border-b-white mb-10 space-x-5">
      <p className="text-2xl font-medium py-2 px-5 text-green-400 ">{title}</p>
      {children}
    </div>
  );
};

export default AuthLayout;
