import BounceLoader from "@/Loader/BoundeLoader";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { showToast } from "@/lib/Toast";
import Headernavbar from "@/pages/Navbar/Headernavbar";
import { useUpdateUserAddressMutation } from "@/redux/features/address/addressApi";
import { useGetUserInfoQuery } from "@/redux/features/user/userApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { MdArrowOutward } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
const formSchema = z.object({
  flat: z.string().min(2),
  street: z.string().min(2),
  landmark: z.string().min(2),
  city: z.string().min(2),
  state: z.string().min(2),
  country: z.string().min(2),
  passcode: z.string().min(2),
  mobile: z.string().min(2),
});

type FormSchemaType = z.infer<typeof formSchema>;

const UpdateAddress = () => {
  const { data: userData, isFetching } = useGetUserInfoQuery();
  const [updateAddress] = useUpdateUserAddressMutation();
  const navigate = useNavigate();
  useEffect(() => {
    if (userData) {
      form.setValue("flat", userData?.user?.address?.flat || "");
      form.setValue("street", userData?.user?.address?.street || "");
      form.setValue("landmark", userData?.user?.address?.landmark || "");
      form.setValue("city", userData?.user?.address?.city || "");
      form.setValue("state", userData?.user?.address?.state || "");
      form.setValue("passcode", userData?.user?.address?.passcode || "");
      form.setValue("country", userData?.user?.address?.country || "");
      form.setValue("mobile", userData?.user?.address?.mobile || "");
    }
  }, [userData]);

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      flat: "",
      street: "",
      landmark: "",
      city: "",
      state: "",
      country: "",
      passcode: "",
      mobile: "",
    },
  });

  async function onSubmit(values: FormSchemaType) {
    await updateAddress(values)
      .unwrap()
      .then(() => {
        console.log(values);

        showToast("Address updated Successfully" || "", {
          type: "success",
        });
        navigate("/dashboard/user-profile");
      })
      .catch((err) => {
        showToast("Error while updating Address", {
          type: "error",
        });
      });
  }

  return (
    <>
      <Headernavbar />
      <div className="flex justify-center items-center px-16  mt-32">
        <div className=" px-16 bg-blue-900 rounded-md ">
          {isFetching && (
            <div className="flex justify-center items-center mx-auto  px-14">
              <BounceLoader />
            </div>
          )}
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid grid-cols-2 mt-7 gap-7"
            >
              <FormField
                control={form.control}
                name="flat"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg text-white font-semibold">
                      Flat
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="bg-transparent h-8 p-0 px-2  text-white rounded-none border-b outline-none border--slate-200"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="landmark"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg text-white font-semibold">
                      Landmark
                    </FormLabel>
                    <FormControl className="mt-0">
                      <Input
                        {...field}
                        className="bg-transparent h-8 p-0 px-2 text-white  rounded-none border-b outline-none border--slate-200"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="street"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg  text-white font-semibold">
                      Street
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="bg-transparent h-8 p-0 px-2 text-white  rounded-none border-b outline-none border--slate-200"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg text-white font-semibold">
                      City
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="bg-transparent h-8 p-0 px-2  text-white  rounded-none border-b outline-none border--slate-200"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg  text-white font-semibold">
                      Country
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="bg-transparent px-2 text-white h-8 p-0 rounded-none border-b outline-none border--slate-200"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg text-white font-semibold">
                      State
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="bg-transparent px-2 h-8 p-0 text-white   rounded-none border-b outline-none border--slate-200"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="passcode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg text-white font-semibold">
                      Passcode
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="bg-transparent px-2 h-8 p-0  text-white  rounded-none border-b outline-none border--slate-200"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="mobile"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg text-white font-semibold">
                      Mobile
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="bg-transparent px-2 h-8 p-0  text-white  rounded-none border-b outline-none border--slate-200"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="border border-slate-200  mb-10 rounded-full bg-transparent hover:bg-slate-200 hover:text-black p-2 px-6"
              >
                Upload
                <MdArrowOutward />
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
};

export default UpdateAddress;
