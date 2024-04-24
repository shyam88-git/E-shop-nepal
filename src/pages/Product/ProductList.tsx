import { Button } from "@/components/ui/button";
import {
  useDeleteProductMutation,
  useGetAllProductQuery,
} from "@/redux/features/products/productApi";
import { MdDelete, MdEdit } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";

import MainWrapper from "../Navbar/MainWrapper";
import BounceLoader from "@/Loader/BoundeLoader";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ConfirmPopup from "@/Popup/ConformPoupModal";
import { showToast } from "@/lib/Toast";
import Modal from "@/modal/Modal";
import UpdateProduct from "./UpdateProduct";

const ProductList = () => {
  const { data: AllProduct, isFetching } = useGetAllProductQuery();
  const [deleteProduct, { isLoading }] = useDeleteProductMutation();
  const navigate = useNavigate();
  const [confirmOpen, setConfirmOpen] = useState<boolean>(false);
  const [selectedProductId, setSelectedProuctId] = useState<string | null>("");
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const deleteProductItem = async () => {
    if (selectedProductId) {
      deleteProduct(selectedProductId)
        .unwrap()
        .then(() =>
          showToast("Product item deleted Successfully", { type: "success" })
        );
      setConfirmOpen(false);
    }
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setSelectedProuctId(null);
  };
  return (
    <>
      <ConfirmPopup
        showModal={confirmOpen}
        onClose={() => setConfirmOpen(false)}
        onConfirm={deleteProductItem}
        isLoading={false}
        message="Are you sure you want to delete ?"
      />

      <MainWrapper>
        <div className="  ml-72 mr-16 mt-24 overflow-x-auto">
          <div className="flex justify-start items-start mb-4 md:mb-4">
            <Button
              onClick={() => navigate("add-product")}
              className="bg-blue-900 w-full md:w-auto rounded-md"
            >
              Add Product
            </Button>
          </div>
          <table className="w-full  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 table-auto">
            {isFetching && (
              <div className="flex justify-center items-center mx-auto  px-14">
                <BounceLoader />
              </div>
            )}
            <thead className="text-xs text-gray-700 uppercase bg-blue-900 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 text-white font-medium py-3">
                  S.N
                </th>
                <th scope="col" className="px-6 text-white font-medium py-3">
                  Name
                </th>
                <th scope="col" className="px-6 text-white font-medium py-3">
                  Brand
                </th>
                <th scope="col" className="px-6 text-white font-medium py-3">
                  Price
                </th>
                <th scope="col" className="px-6 text-white font-medium py-3">
                  Qty
                </th>
                <th scope="col" className="px-6 text-white font-medium py-3">
                  Image
                </th>
                <th scope="col" className="px-6 text-white font-medium py-3">
                  Category
                </th>

                <th scope="col" className="px-6 text-white font-medium py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {AllProduct?.products?.map((product, index) => (
                <tr
                  key={product._id}
                  className={`${
                    index % 2 === 0 ? "bg-white" : "bg-gray-200"
                  } dark:bg-gray-800`}
                >
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4">{product?.name}</td>
                  <td className="px-6 py-4">{product?.brand}</td>
                  <td className="px-6 py-4">{product?.price}</td>
                  <td className="px-6 py-4">{product?.qty}</td>
                  <td className="px-2 py-4">
                    <img className="w-34 h-24" src={product?.image} alt="" />
                  </td>

                  <td className="px-6 py-4">{product?.category}</td>
                  <td className="py-4 flex mt-7 justify-center gap-1 items-center">
                    <span
                      onClick={() => {
                        setModalOpen(true);
                        setSelectedProuctId(`${product?._id}`);
                      }}
                      className="px-2 py-1 rounded-md cursor-pointer bg-blue-900 hover:bg-blue-800"
                    >
                      <MdEdit size={22} color="white" />
                    </span>
                    <span
                      onClick={() => navigate(`${product?._id}`)}
                      className=" cursor-pointer  rounded-md px-2 py-1 bg-green-500 hover:bg-green-400"
                    >
                      <FaRegEye size={24} color="white" />
                    </span>
                    <span
                      onClick={() => {
                        setSelectedProuctId(product?._id as string);
                        setConfirmOpen(true);
                      }}
                      className="rounded-md px-2 py-1 cursor-pointer bg-red-600 hover:bg-red-500"
                    >
                      <MdDelete size={24} color="white" />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Modal
          title={selectedProductId ? " Update Product" : "Add Product"}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
        >
          <UpdateProduct
            onSuccess={handleModalClose}
            productId={selectedProductId}
          />
        </Modal>
      </MainWrapper>
    </>
  );
};

export default ProductList;
