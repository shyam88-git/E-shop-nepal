import Headernavbar from "./Headernavbar";
import Sidenavbar from "./Sidenavbar";
interface PropsI {
  children: React.ReactNode;
}
const MainWrapper = ({ children }: PropsI) => {
  return (
    <div>
      <Headernavbar />
      {children}

      <Sidenavbar />
    </div>
  );
};
export default MainWrapper;
