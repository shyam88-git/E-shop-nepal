import BounceLoader from "@/Loader/BoundeLoader";
import { Button } from "@/components/ui/button";
import Headernavbar from "@/pages/Navbar/Headernavbar";
import { useGetUserInfoQuery } from "@/redux/features/user/userApi";
import { useEffect, useState } from "react";
import { MdEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const { data: userData, isFetching } = useGetUserInfoQuery();
  const [userProfile, setUserProfile] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setUserProfile(userProfile);
  }, [userData]);
  return (
    <>
      <Headernavbar />
      <div className="flex justify-between items-center mt-28">
        <div className="max-w-md mx-auto mt-8  bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="flex justify-center items-center">
            <img
              className="w-full ml-12 rounded-lg object-cover md:h-full md:w-48"
              src={userData?.user?.avatar}
            />
            <div>
              <p className="px-12">
                {" "}
                <span className="font-bold">Name</span> :{userData?.user?.name}
              </p>

              <p className="px-12">
                <span className="font-bold">Email</span> :
                {userData?.user?.email}
              </p>
            </div>
          </div>
        </div>
        <div className="relative overflow-x-auto mt-14 shadow-md sm:rounded-lg mr-6  ml-12">
          {isFetching && (
            <div className="flex justify-center items-center mx-auto  px-14">
              <BounceLoader />
            </div>
          )}
          <table className="w-full text-sm text-left rtl:text-right text-blue-900 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-blue-900 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 text-white font-medium py-3">
                  Flat
                </th>
                <th scope="col" className="px-6 text-white font-medium py-3">
                  Street
                </th>
                <th scope="col" className="px-6 text-white font-medium py-3">
                  Landmark
                </th>
                <th scope="col" className="px-6 text-white font-medium py-3">
                  City
                </th>
                <th scope="col" className="px-6 text-white font-medium py-3">
                  State
                </th>
                <th scope="col" className="px-6 text-white font-medium py-3">
                  Country
                </th>
                <th scope="col" className="px-6 text-white font-medium py-3">
                  Passcode
                </th>
                <th scope="col" className="px-6 text-white font-medium py-3">
                  Mobile
                </th>
                <th scope="col" className="px-6 text-white font-medium py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {userData?.user?.address?.flat}
                </th>
                <td className="px-6 py-4">{userData?.user?.address?.street}</td>
                <td className="px-6 py-4">
                  {userData?.user?.address?.landmark}
                </td>
                <td className="px-6 py-4">{userData?.user?.address?.city}</td>
                <td className="px-6 py-4">{userData?.user?.address?.state}</td>
                <td className="px-6 py-4">
                  {userData?.user?.address?.country}
                </td>
                <td className="px-6 py-4">
                  {userData?.user?.address?.passcode}
                </td>
                <td className="px-6 py-4">{userData?.user?.address?.mobile}</td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    <Button
                      onClick={() => navigate(`/user-profile/update-address`)}
                      className="w-12 h-8 rounded-lg cursor-pointer bg-blue-900"
                    >
                      <MdEdit size={32} />
                    </Button>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
