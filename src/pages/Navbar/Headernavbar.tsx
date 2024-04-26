import { useGetUserInfoQuery } from "@/redux/features/user/userApi";
import { useAppDispatch } from "@/redux/store";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "@/redux/features/auth/authSlice";

const HeaderNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const navigate = useNavigate();
  const { data: UserData } = useGetUserInfoQuery();

  const dispatch = useAppDispatch();

  const logoutUser = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <nav className="bg-blue-900  fixed top-0 left-0 right-0   border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-2xl mr-16 flex flex-wrap items-start justify-between  p-4">
        <a
          href="https://flowbite.com/"
          className="flex items-start space-x-2 rtl:space-x-reverse"
        >
          <img src="/logo.png" className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-white text-2xl font-semibold whitespace-nowrap dark:text-white">
            E-Shop Nepal
          </span>
        </a>
        <div className="flex items-center md:order-2 gap-12 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            // onClick={toggleDropdown}
            type="button"
            className="flex text-sm px-8 py-2 text-white bg-blue-800 hover:bg-blue-700 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button"
            // aria-expanded={isDropdownOpen ? "true" : "false"}
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
          >
            <span className="sr-only text-white">Open user menu</span>
            Back
          </button>
          <button
            onClick={toggleDropdown}
            type="button"
            className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded={isDropdownOpen ? "true" : "false"}
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="w-8 h-8 rounded-full"
              src={UserData?.user?.avatar}
              alt="user photo"
            />
          </button>

          {isDropdownOpen && (
            <div
              className="absolute z-100   top-16 mt-2  w-[250px] text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
              id="user-dropdown"
            >
              <div className="px-2 py-3">
                <span className="block text-sm font-medium text-gray-900 dark:text-white">
                  {UserData?.user?.name}
                </span>
                <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
                  {UserData?.user?.email}
                </span>
                <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
                  {UserData?.user?.isAdmin}
                </span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li onClick={() => navigate("/dashboard/user-profile")}>
                  <a className="block px-4 w-32 py-2 text-sm cursor-pointer text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                    User Profile
                  </a>
                </li>
                <li onClick={logoutUser}>
                  <a className="block px-4 w-32 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          )}
          <button
            data-collapse-toggle="navbar-user"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-user"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-user"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/dashboard/men"
                className="block py-2 px-3 text-white bg-blue-700  rounded md:bg-transparent md:text-white md:p-0 md:dark:text-blue-500"
                aria-current="page"
              >
                Men's Wear
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/women"
                className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Women's Wear
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/kid"
                className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Kid's Wear
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default HeaderNavbar;
