import { CgProfile } from "react-icons/cg";
import { IoMdLogOut } from "react-icons/io";

const ProfileModal = () => {
  return (
    <div>
      <div className=" w-[200px] float-end py-12 mt-32 mr-6 border rounded-md border-slate-400 shadow-2xl ">
        <div className="flex px-4 mb-8 items-center gap-5">
          <CgProfile size={30} />
          <span>User Profile</span>
        </div>
        <div className="flex px-4 items-center gap-5">
          <IoMdLogOut size={30} />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
