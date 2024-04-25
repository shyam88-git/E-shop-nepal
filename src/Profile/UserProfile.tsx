import BounceLoader from "@/Loader/BoundeLoader";
import { Button } from "@/components/ui/button";
import MainWrapper from "@/pages/Navbar/MainWrapper";
import { useGetUserInfoQuery } from "@/redux/features/user/userApi";
import { useEffect, useState } from "react";
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
      <MainWrapper>
        <div className="flex justify-center px-52 mt-32">
          <div className="bg-white max-w-2xl w-[1000px] shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-2 sm:px-6">
              <p className=" max-w-2xl text-sm text-gray-500">
                {isFetching && <BounceLoader />}
                <img
                  className="w-full  object-cover md:h-40 rounded-lg md:w-48"
                  src={userData?.user?.avatar}
                />
              </p>
            </div>
            <div className="border-t border-gray-200">
              <dl>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-bold text-gray-500">Name</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {userData?.user?.name}
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-bold text-gray-500">Email</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {userData?.user?.email}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm  font-bold text-gray-500">Mobile</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {userData?.user?.address?.mobile}
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 flex items-center gap-32  ">
                  <Button
                    onClick={() => navigate(`/user-profile/update-address`)}
                    className="px-4 py-2 mt-4 text-base rounded-md cursor-pointer bg-blue-900"
                  >
                    Edit Address
                  </Button>
                </div>
                <table className="w-full text-sm text-left  rtl:text-right text-blue-900 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-blue-900 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th
                        scope="col"
                        className=" text-white px-4 font-medium py-3"
                      >
                        Flat
                      </th>
                      <th scope="col" className=" text-white font-medium py-3">
                        Street
                      </th>
                      <th scope="col" className=" text-white font-medium py-3">
                        Landmark
                      </th>
                      <th scope="col" className=" text-white font-medium py-3">
                        City
                      </th>
                      <th scope="col" className=" text-white font-medium py-3">
                        Country
                      </th>
                      <th scope="col" className=" text-white font-medium py-3">
                        Passcode
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                      <td className="px-2 py-4">
                        {userData?.user?.address?.street}
                      </td>
                      <td className="px-2 py-4">
                        {userData?.user?.address?.landmark}
                      </td>
                      <td className="px-2 py-4">
                        {userData?.user?.address?.city}
                      </td>
                      <td className="px-2 py-4">
                        {userData?.user?.address?.state}
                      </td>
                      <td className="px-2 py-4">
                        {userData?.user?.address?.country}
                      </td>
                      <td className="px-2 py-4">
                        {userData?.user?.address?.passcode}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </dl>
            </div>
          </div>
        </div>
      </MainWrapper>
    </>
  );
};

export default UserProfile;
