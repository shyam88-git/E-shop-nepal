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
import { IoMdLogIn } from "react-icons/io";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

type FormSceham = z.infer<typeof formSchema>;

const Login = () => {
  const form = useForm<FormSceham>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  return (
    <div className="flex  justify-center  items-center h-auto  ">
      <div className=" my-16 px-16 bg-blue-950">
        <div className=" flex  border-b-2 border-b-white mb-10 space-x-5">
          <span className="mt-1 py-2">
            <IoMdLogIn size={30} color="green" />
          </span>
          <p className="text-2xl font-medium py-2 text-green-400 ">Login</p>
        </div>
        <div className="grid gap-4 justify-center mb-8 md:grid-cols-1">
          <Form {...form}>
            <form>
              <div>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="mt-4 text-slate-300 font-medium text-sm">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className=""
                          placeholder="Enter Email Address"
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
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-slate-300">
                        Password
                      </FormLabel>
                      <FormControl>
                        <Input
                          className=""
                          type="password"
                          {...field}
                          placeholder="Enter Password"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="mt-4">
                <Button className="text-white px-12 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm  py-2.5 text-center me-2 mb-2">
                  Login
                </Button>
              </div>
            </form>
          </Form>
          <p className="text-slate-400">Dont'Have an Account ? Register</p>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Login;
