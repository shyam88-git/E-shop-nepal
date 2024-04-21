import { Button } from "@/components/ui/button";
import Headernavbar from "../Navbar/Headernavbar";
import { useGetWomenCollectionQuery } from "@/redux/features/products/productApi";
import BounceLoader from "@/Loader/BoundeLoader";
const Women_Collection = () => {
  const { data: productData, isLoading } = useGetWomenCollectionQuery();
  return (
    <>
      <Headernavbar />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mb-5 mt-32">
        {isLoading && (
          <div className="flex justify-center items-center mx-auto  px-14">
            <BounceLoader />
          </div>
        )}
        {productData?.products.map((item, index) => (
          <div
            key={index}
            className="w-full mt-8 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl"
          >
            <img
              className="h-44 w-full object-cover rounded-xl"
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
            </div>

            <div className="flex justify-center gap-4 mb-2">
              <Button className="bg-blue-900">Add To Card</Button>
              <p className="text-xl font-bold mt-2 text-pink-600">
                {item?.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Women_Collection;
