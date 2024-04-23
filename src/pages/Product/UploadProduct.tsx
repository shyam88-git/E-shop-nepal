import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import AuthLayout from "@/layout/AuthLayout";
import { useNavigate } from "react-router-dom";
import MainWrapper from "../Navbar/MainWrapper";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useUploadProductMutation } from "@/redux/features/products/productApi";
import { showToast } from "@/lib/Toast";

const CategoryList = [
  { label: "Men's Wear", value: "MEN" },
  { label: "Women's Wear", value: "WOMEN" },
  { label: "Kid's Wear", value: "KID" },
];

const formSchema = z.object({
  name: z.string().min(2),
  brand: z.string().min(2),
  price: z.string().min(2),
  qty: z.string().min(2),
  image: z.string().min(2),
  category: z.string({ required_error: "Please Select a Category" }),
  description: z.string().min(2),
  usage: z.string().min(2),
});

type FormSchemaType = z.infer<typeof formSchema>;

const UploadProduct = () => {
  const [uploadProduct] = useUploadProductMutation();

  const navigate = useNavigate();
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      brand: "",
      description: "",
      usage: "",
    },
  });

  async function onSubmit(values: FormSchemaType) {
    try {
      await uploadProduct(values).unwrap();
      showToast("Product uploaded successfully", { type: "success" });
      navigate("/dashboard/product/product-list");
    } catch (error) {
      showToast("Error while uploading product", { type: "error" });
      console.error(error);
    }
  }

  return (
    <MainWrapper>
      <div className="flex justify-center items-center sm:px-20 mt-12 h-auto">
        <div className="my-16 px-16 bg-blue-950">
          <AuthLayout title="Upload Product">
            <p></p>
          </AuthLayout>
          <div className=" gap-4  mb-8 md:grid-cols-1">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="flex justify-between items-center gap-9">
                  <div className="">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="mt-4 text-slate-300 font-medium text-sm">
                            name
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className=""
                              placeholder="Enter Name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="">
                    <FormField
                      control={form.control}
                      name="brand"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-slate-300">
                            Brand
                          </FormLabel>
                          <FormControl>
                            <Input
                              className=""
                              {...field}
                              placeholder="Enter Brand"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <div className="flex justify-center items-center gap-9">
                  <div className="mt-5">
                    <FormField
                      control={form.control}
                      name="qty"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-slate-300">
                            Qty
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              className=""
                              {...field}
                              placeholder="Enter Qty"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="mt-5">
                    <FormField
                      control={form.control}
                      name="price"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-slate-300">
                            Price
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              className=""
                              {...field}
                              placeholder="Enter Price"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className="mt-5">
                  <FormField
                    control={form.control}
                    name="usage"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-slate-300">
                          Usage
                        </FormLabel>
                        <FormControl>
                          <Input
                            className=""
                            {...field}
                            placeholder="Enter Usage"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="mt-5">
                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-slate-300">
                          Email
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a Category" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {CategoryList?.map((option, idx) => (
                              <SelectItem key={idx} value={option.value}>
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="mt-5">
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-slate-300">
                          Description
                        </FormLabel>
                        <FormControl>
                          <Input
                            className=""
                            {...field}
                            placeholder="Enter Description"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="mt-5">
                  <FormField
                    control={form.control}
                    name="image"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-slate-300">
                          Image
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="file"
                            className=""
                            {...field}
                            placeholder="Enter Image"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="mt-4">
                  <Button
                    type="submit"
                    className="text-white px-12 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm py-2.5 text-center me-2 mb-2"
                  >
                    Upload
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </MainWrapper>
  );
};

export default UploadProduct;
