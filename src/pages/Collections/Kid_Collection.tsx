import { Button } from "@/components/ui/button";
import Headernavbar from "../Navbar/Headernavbar";
import { useGetKidsCollectionQuery } from "@/redux/features/products/productApi";
import BounceLoader from "@/Loader/BoundeLoader";
import { GrView } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import MainWrapper from "../Navbar/MainWrapper";
const Kid_Collection = () => {
  const navigate = useNavigate();
  const { data: productData, isLoading } = useGetKidsCollectionQuery();
  return (
    <>
      <MainWrapper>
        <div
          style={{ marginLeft: "304px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mb-5 mt-32"
        >
          {isLoading && (
            <div className="flex justify-center items-center mx-auto  px-14">
              <BounceLoader />
            </div>
          )}
          {productData?.products.map((item, index) => (
            <div
              key={index}
              className="w-full mt-8 p-2 bg-white rounded-xl duration-300 shadow-lg hover:shadow-2xl"
            >
              <img
                className="h-52 w-full object-cover rounded-xl"
                alt=""
                src={item?.image}
              />
              <div className="p-2">
                <h2 className="font-bold text-blue-900 text-lg mb-2">
                  {item?.name}
                </h2>
                <h6 className="font-bold text-lg mb-2 text-slate-500">
                  {item?.brand}
                </h6>
                <p className="text-sm text-gray-600">
                  Simple Yet Beautiful Card Design with TaiwlindCss. ...
                </p>
                <p className="text-xl font-bold mt-2 text-pink-600">
                  Rs.{item?.price}
                </p>
              </div>

              <div className="flex justify-center gap-4 mb-2">
                <Button className="bg-blue-900">Add To Card</Button>

                <i
                  onClick={() => navigate(`${item?._id}`)}
                  className="w-12  rounded-sm cursor-pointer py-1 mt-1  px-3 h-8 bg-green-500"
                >
                  {" "}
                  <GrView size={24} color="white" />
                </i>
              </div>
            </div>
          ))}
        </div>
      </MainWrapper>
    </>
  );
};

export default Kid_Collection;
