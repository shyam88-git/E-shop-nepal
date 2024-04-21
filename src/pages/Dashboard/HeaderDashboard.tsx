const HeaderDashboard = () => {
  return (
    <div className="grid grid-cols-4 gap-4 mb-4">
      <div className="flex flex-col  justify-center sm:px-8 h-32 rounded bg-blue-500 dark:bg-gray-800">
        <span className="text-xl sm:text-2xl font-bold mt-5 text-white dark:text-gray-400">
          300
        </span>
        <p className="text-xl sm:text-2xl flex flex-col sm:flex-row gap-2 sm:gap-8 text-white dark:text-gray-500">
          <span className="text-xl sm:text-2xl"> Product</span>

          <span className=" mt-1 sm:mt-2">
            <svg
              className="flex-shrink-0 w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 20"
            >
              <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
            </svg>
          </span>
        </p>
      </div>
      <div className="flex flex-col justify-center  sm:px-8  h-32 rounded bg-yellow-900 dark:bg-gray-800">
        <span className="text-xl sm:text-2xl font-bold mt-5 text-white dark:text-gray-400">
          250
        </span>
        <p className="text-xl sm:text-2xl flex  sm:flex-row gap-2 sm:gap-8 text-white dark:text-gray-500">
          <span className="text-xl sm:text-2xl"> Categories</span>

          <svg
            className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 mt-1 sm:mt-2 text-white transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 21"
          >
            <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
          </svg>
        </p>
      </div>
      <div className="flex flex-col  justify-center sm:px-8 h-32 rounded bg-green-500 dark:bg-gray-800">
        <span className="text-xl sm:text-2xl font-bold mt-5 text-white dark:text-gray-400">
          300
        </span>
        <p className="text-xl sm:text-2xl flex flex-col sm:flex-row gap-2 sm:gap-8 text-white dark:text-gray-500">
          <span className="text-xl sm:text-2xl"> Customers</span>

          <svg
            className="flex-shrink-0 mt-1 sm:mt-2 w-4 h-4 sm:w-5 sm:h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
          </svg>
        </p>
      </div>

      <div className="flex flex-col  justify-center sm:px-8 h-32 rounded bg-red-500 dark:bg-gray-800">
        <span className="text-xl sm:text-2xl font-bold mt-5 text-white dark:text-gray-400">
          300
        </span>
        <p className="text-xl sm:text-2xl  flex flex-col sm:flex-row gap-2  sm:gap-8 text-white dark:text-gray-500">
          <span className="text-xl sm:text-2xl"> Orders</span>

          <svg
            className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 mt-1 sm:mt-2 text-white transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 21"
          >
            <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
          </svg>
        </p>
      </div>
    </div>
  );
};

export default HeaderDashboard;
