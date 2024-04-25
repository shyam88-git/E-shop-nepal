import { Button } from "@/components/ui/button";
import MainWrapper from "@/pages/Navbar/MainWrapper";
import { MdDelete } from "react-icons/md";

const Cart = () => {
  return (
    <MainWrapper>
      <div className="flex justify-center items-center gap-28 ml-52 mt-32">
        <div>
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-white uppercase bg-blue-900 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Product name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Image
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Qty
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Apple MacBook Pro 17"
                  </th>
                  <td className="px-6 py-4">Silver</td>
                  <td className="px-6 py-4">Laptop</td>
                  <td className="px-6 py-4">$2999</td>
                  <td className="px-6 py-4">$2999</td>
                  <td className="px-6 py-4">
                    <Button className="bg-red-600 w-12">
                      <MdDelete size={30} />
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className=" w-[400px] px-7 py-2  mt-8">
          <div className="max-w-sm p-6 mb-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h2 className="text-sl: $290ate-300 font-medium text-xl px-12 mb-4">
              Your Total
            </h2>
            <div className="w-[300px] rounded-md bg-blue-900 px-12  py-2">
              <div className="w-[200px] mt-4 mb-2">
                <h5 className="mb-2 text-sm text-slate-300 font-bold tracking-tight  dark:text-white">
                  Total : $290
                </h5>

                <h5 className="mb-3  text-slate-300 text-sm font-bold tracking-tight dark:text-white">
                  Tax :$390
                </h5>
                <h5 className="mb-2 text-sm font-bold tracking-tight text-slate-300 dark:text-white">
                  Grand Total: $25
                </h5>
              </div>
            </div>
            <div className="flex justify-center items-center mt-8">
              <Button className="bg-blue-900 mb-2 ml-4">Checkout</Button>
              <Button className="bg-green-500  ml-4">Shop More</Button>
            </div>
          </div>
        </div>
      </div>
    </MainWrapper>
  );
};

export default Cart;
