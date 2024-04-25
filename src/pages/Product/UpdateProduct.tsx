import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  useLazyGetSingleProuctQuery,
  useUpdateProductMutation,
} from "@/redux/features/products/productApi";
import { useEffect, useState } from "react";
import {
  Form,
  FormLabel,
  FormControl,
  FormMessage,
  FormField,
  FormItem,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

interface PropsI {
  productId?: string | null;
  onSuccess: () => void;
}

//validation
const formScehama = z.object({
  name: z.string().min(2),
  brand: z.string().min(2),
  price: z.string(),
  qty: z.string(),
  image: z.string(),
  category: z.string().min(2),
  description: z.string().min(2),
  usage: z.string().min(2),
});

type FormSchemaType = z.infer<typeof formScehama>;

const UpdateProduct = ({ onSuccess, productId }: PropsI) => {
  const [getSingleProduct, { data: singleProductData }] =
    useLazyGetSingleProuctQuery();
  const [updateProduct] = useUpdateProductMutation();
  const [file, setFile] = useState<string>("");
  const [image, setImage] = useState<string>("");

  useEffect(() => {
    if (productId) {
      getSingleProduct(productId);
    }
  }, [productId, singleProductData]);

  const uploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];

      const base64 = await convertBase64(file);
      console.log(base64);
      setFile(base64);
    }
  };

  const convertBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result as string);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const convertBase64ToImage = (
    base64String: string
  ): Promise<HTMLImageElement> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = (error) => reject(error);
      img.src = base64String;
    });
  };

  useEffect(() => {
    if (singleProductData) {
      form.setValue("name", singleProductData?.product?.name);
      form.setValue("brand", singleProductData?.product?.brand);
      form.setValue("price", singleProductData?.product?.price.toString());
      form.setValue("qty", singleProductData?.product?.qty.toString());
      form.setValue("description", singleProductData?.product?.description);
      form.setValue("usage", singleProductData?.product?.usage);
      form.setValue("category", singleProductData?.product?.category);
      const imgUrl = singleProductData?.product?.image as string;
      if (imgUrl) {
        convertBase64ToImage(imgUrl)
          .then((img) => {
            const canvas = document.createElement("canvas");
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext("2d");
            ctx?.drawImage(img, 0, 0);
            const base64String = canvas.toDataURL("image/png");
            form.setValue("image", base64String);
            setFile(base64String);
          })
          .catch((error) => {
            console.error("Error converting image URL to base64:", error);
          });
      }
    }
  }, [singleProductData, productId]);

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formScehama),
    defaultValues: {
      name: "",
      brand: "",
      image: "",
      description: "",
      usage: "",
    },
  });

  async function onSubmit(values: FormSchemaType) {
    // const {id |string}=singleProductData?.product?._id;
    const postData = {
      name: values?.name,
      brand: values?.brand,
      price: values?.price,
      qty: values?.qty,
      category: values?.category,
      description: values?.description,
      usage: values?.usage,
      image: file,
    };

    if (productId) {
      await updateProduct({ id: productId as string, data: postData });
    }
  }
  return (
    <>
      <div>
        <div className="mb-4">
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

              <div className="flex justify-betweem  items-center gap-20">
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
                        Category
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={form.watch("category")}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a Category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem
                            value={
                              singleProductData?.product?.category as string
                            }
                          >
                            {singleProductData?.product?.category}
                          </SelectItem>
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
                  render={() => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-slate-300">
                        Image
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          placeholder="Enter Image"
                          onChange={(e) => uploadImage(e)}
                        />
                      </FormControl>
                      <img src={file} alt="" />

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex mt-5 items-center gap-3 justify-end">
                <Button
                  type="submit"
                  className="text-white px-12 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm py-2.5 text-center me-2 mb-2"
                >
                  Update
                </Button>
                <Button onClick={() => onSuccess()} className="bg-red-500">
                  Cancel
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
};

export default UpdateProduct;
