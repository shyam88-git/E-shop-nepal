import BounceLoader from "@/Loader/BoundeLoader";
import Headernavbar from "@/pages/Navbar/Headernavbar";
import { useLazyGetSingleProuctQuery } from "@/redux/features/products/productApi";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MainWrapper from "../Navbar/MainWrapper";

type Product = {
  _id: string | number;
  name: string;
  brand: string;
  price: number;
  qty: number;
  image: string;
  category: string;
  description: string;
  usage: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

const ProductProfile = () => {
  const [getSingleProduct, { isFetching }] = useLazyGetSingleProuctQuery();
  const [singleProduct, setSingleProduct] = useState<Product | null>(null);

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getSingleProduct(id)
        .unwrap()
        .then((data) => {
          //@ts-ignore
          if (data && data.product) {
            //@ts-ignore
            setSingleProduct(data.product);
          }
        })
        .catch((error) => {
          console.error("Error fetching product data:", error);
        });
    }
  }, [getSingleProduct, id]);

  console.log("single product", singleProduct);
  return (
    <MainWrapper>
      <div className="max-w-6xl mx-auto  mt-32 px-4 sm:px-6 lg:px-8">
        {isFetching && (
          <div className="flex justify-center items-center mx-auto  px-14">
            <BounceLoader />
          </div>
        )}
        <div className="flex flex-col px-32 md:flex-row gap-4">
          <div className="md:flex-1 px-4">
            <div className="h-[350px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
              <img
                className="w-full h-full object-cover"
                src={singleProduct?.image}
                alt="Product Image"
              />
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              {singleProduct?.name}
            </h2>
            <p className="text-sm font-bold text-gray-800 dark:text-white mb-2">
              {singleProduct?.category}
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              {singleProduct?.brand}
            </p>
            <div className="flex mb-4">
              <div className="mr-4">
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Price:
                </span>
                <span className="text-gray-600 px-2 dark:text-gray-300">
                  Rs.{singleProduct?.price}
                </span>
              </div>
              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Availability
                </span>
                <span className="text-gray-600 px-2 dark:text-gray-300">
                  : In Stock
                </span>
              </div>
            </div>
            <div className="mb-4">
              <span className="font-bold text-gray-700 dark:text-gray-300">
                Qty: {singleProduct?.qty}
              </span>
            </div>

            <div>
              <span className="font-bold text-gray-700 dark:text-gray-300">
                Product Description:
              </span>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                {singleProduct?.description}
              </p>
            </div>
            <div>
              <span className="font-bold text-gray-700 dark:text-gray-300">
                Product Usage:
              </span>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                {singleProduct?.usage}
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainWrapper>
  );
};
export default ProductProfile;
