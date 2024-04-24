import { Button } from "@/components/ui/button";
import {
  useDeleteProductMutation,
  useGetAllProductQuery,
  useGetSearchedProductQuery,
} from "@/redux/features/products/productApi";
import { MdDelete, MdEdit } from "react-icons/md";
import { FaFilter, FaRegEye } from "react-icons/fa";
import MainWrapper from "../Navbar/MainWrapper";
import BounceLoader from "@/Loader/BoundeLoader";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ConfirmPopup from "@/Popup/ConformPoupModal";
import { showToast } from "@/lib/Toast";
import Modal from "@/modal/Modal";
import UpdateProduct from "./UpdateProduct";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FormSchema = z.object({
  category: z.string({
    required_error: "Please select a language.",
  }),
});

const categoryList = [
  { label: "Men's Wear", value: "MEN" },
  { label: "Women's Wear", value: "WOMEN" },
  { label: "Kid's Wear", value: "KID" },
];

const ProductList = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  const { data: AllProduct, isFetching } = useGetAllProductQuery();
  const [deleteProduct] = useDeleteProductMutation();
  const navigate = useNavigate();
  const [confirmOpen, setConfirmOpen] = useState<boolean>(false);
  const [selectedProductId, setSelectedProuctId] = useState<string | null>("");
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [filterOpen, setFilterOpen] = useState<boolean>(false);
  const [selectedCategories, setSelectedCategories] = useState<string | null>(
    ""
  );
  const { data, isLoading } = useGetSearchedProductQuery(
    selectedCategories as string
  );

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

  const handleCategoryChange = (value: string) => {
    setSelectedCategories(value as string);
    console.log("value is ", value);
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
          <div className="flex justify-between items-center  mb-4 md:mb-4">
            <div className="flex justify-center items-center gap-8">
              <Button
                onClick={() => setFilterOpen(true)}
                className="w-15 rounded-md "
              >
                <FaFilter size={20} color="white" />
              </Button>
              {filterOpen && (
                <Form {...form}>
                  <form className="w-64 space-y-6">
                    <FormField
                      control={form.control}
                      name="category"
                      render={() => (
                        <FormItem>
                          <Select
                            onValueChange={handleCategoryChange}
                            value={selectedCategories as string}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a Category" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {categoryList?.map((categry, index) => (
                                <SelectItem key={index} value={categry?.value}>
                                  {categry?.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </form>
                </Form>
              )}
            </div>

            <Button
              onClick={() => navigate("add-product")}
              className="bg-blue-900 w-full md:w-auto rounded-md"
            >
              Add Product
            </Button>
          </div>
          <table className="w-full  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 table-auto">
            {isFetching ||
              (isLoading && (
                <div className="flex justify-center items-center mx-auto  px-14">
                  <BounceLoader />
                </div>
              ))}
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
              {selectedCategories?.length !== 0
                ? data?.products?.map((product, index) => (
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
                        <img
                          className="w-34 h-24"
                          src={product?.image}
                          alt=""
                        />
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
                  ))
                : AllProduct?.products?.map((product, index) => (
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
                        <img
                          className="w-34 h-24"
                          src={product?.image}
                          alt=""
                        />
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
