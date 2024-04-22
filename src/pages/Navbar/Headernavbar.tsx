import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";

const Headernavbar = () => {
  const navigate = useNavigate();
  const [showProfileMenu, setShowProfileMenu] = useState<boolean>(false);
  const [showNavMenu, setShowNavMenu] = useState<boolean>(false);
  console.log("show profile menu", showProfileMenu);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 w-full bg-blue-900 shadow-2xl">
        <div className="flex justify-between mr-8 ml-6 items-center py-2 md:py-4">
          <div className="w-44 h-10 md:h-12 flex items-center">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-full object-contain rounded-md"
            />
          </div>
          <p className="text-2xl md:text-4xl font-bold text-white ml-4">
            E-Shop Nepal
          </p>
          <div className="flex items-center gap-3">
            <Button
              onClick={() => navigate("/dashboard")}
              className="bg-blue-600 py-6 hover:bg-white hover:text-black"
            >
              Back
            </Button>
            <Button
              onClick={() => navigate("/dashboard/user-profile")}
              className="bg-slate-400 py-6  hover:bg-white hover:text-black"
            >
              <span className="flex justify-center items-center gap-3 ">
                <i
                // onClick={() => {
                //   setShowNavMenu((prevState) => !prevState);
                //   setShowProfileMenu(false);
                // }}
                >
                  <CgProfile size={30} color="green" />
                </i>
                <i>
                  <IoIosArrowForward size={24} />
                </i>
              </span>
            </Button>
          </div>
        </div>
      </div>
      {/* <Headernavbar /> */}
    </>
  );
};

export default Headernavbar;
