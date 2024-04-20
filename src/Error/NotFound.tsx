import { TfiFaceSad } from "react-icons/tfi";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <TfiFaceSad size={200} className="text-slate-600" />
      <p className="text-5xl py-8 font-bold text-slate-400">404</p>
      <p className="text-3xl font-bold text-slate-300">Page not found</p>
      <p className="w-[512px] py-5 text-center">
        The Page you are looking for doesnot exist or an other error occured
        &nbsp;
        <Link to="/" className="text-base font-bold ">
          Go Back{" "}
        </Link>{" "}
        , or head over to{" "}
        <Link to="/" className="font-bold text-base">
          Home Page
        </Link>{" "}
        to choose a new direction.
      </p>
    </div>
  );
};

export default NotFound;
