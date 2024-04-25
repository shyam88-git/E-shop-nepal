import BounceLoader from "@/Loader/BoundeLoader";
import { useLazyGetSingleProuctQuery } from "@/redux/features/products/productApi";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  SelectItem,
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import MainWrapper from "@/pages/Navbar/MainWrapper";

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

const formSchema = z.object({
  QtyList: z.string().min(2),
});

type FormSchemaType = z.infer<typeof formSchema>;

const QtyList = [
  { label: "1", value: "1" },
  { label: "2", value: "2" },
  { label: "3", value: "3" },
  { label: "4", value: "4" },
  { label: "5", value: "5" },
  { label: "6", value: "6" },
];

const Profile = () => {
  const [getSingleProduct, { isFetching }] = useLazyGetSingleProuctQuery();
  const [singleProduct, setSingleProduct] = useState<Product | null>(null);
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
  });
  const navigate = useNavigate();
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
        <div className="flex flex-col md:flex-row px-52 gap-4">
          <div className="md:flex-1 px-4">
            <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
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
                <span className="text-gray-600 dark:text-gray-300">
                  Rs.{singleProduct?.price}
                </span>
              </div>
              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Availability:
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  In Stock
                </span>
              </div>
            </div>
            <div className="mb-4">
              <span className="font-bold text-gray-700 dark:text-gray-300">
                Select Color:
              </span>
              <div className="flex items-center mt-2">
                <button className="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 mr-2"></button>
                <button className="w-6 h-6 rounded-full bg-red-500 dark:bg-red-700 mr-2"></button>
                <button className="w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-700 mr-2"></button>
                <button className="w-6 h-6 rounded-full bg-yellow-500 dark:bg-yellow-700 mr-2"></button>
              </div>
            </div>
            <div className="mb-4">
              <span className="font-bold text-gray-700 dark:text-gray-300">
                Select Size:
              </span>
              <div className="flex items-center mt-2">
                <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                  S
                </button>
                <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                  M
                </button>
                <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                  L
                </button>
                <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                  XL
                </button>
                <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                  XXL
                </button>
              </div>
            </div>
            <div>
              <span className="font-bold text-gray-700 dark:text-gray-300">
                Product Description:
              </span>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                {singleProduct?.description}
              </p>
            </div>

            <div className=" flex  items-start gap-4  mt-4">
              <Form {...form}>
                <form className="flex items-start gap-14">
                  <FormField
                    control={form.control}
                    name="QtyList"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel></FormLabel>
                        <FormControl>
                          <Select defaultValue={field?.value}>
                            <>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a Qty" />
                              </SelectTrigger>
                              <SelectContent className="w-12">
                                {QtyList.map((qty, idx) => (
                                  <SelectItem key={idx} value={qty?.value}>
                                    {qty.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    onClick={() =>
                      navigate(
                        `/dashboard/${singleProduct?.category}/${singleProduct?._id}/cart`
                      )
                    }
                    className="mt-2 bg-blue-900"
                  >
                    Add To Card
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </MainWrapper>
  );
};
export default Profile;
