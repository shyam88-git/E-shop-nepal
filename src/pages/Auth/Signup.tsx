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
import AuthLayout from "@/layout/AuthLayout";
import { Link, useNavigate } from "react-router-dom";

const formSchema = z.object({
  name: z.string().min(2),

  email: z.string().email(),
  password: z.string().min(8),
  confirmPassword: z.string().min(8),
});

type FormSceham = z.infer<typeof formSchema>;

const Signup = () => {
  const form = useForm<FormSceham>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const navigate = useNavigate();
  return (
    <div className="flex  justify-center  items-center h-auto  ">
      <div className=" my-16 px-20 bg-blue-950">
        <AuthLayout title="Signup">
          <span className="mt-3">
            <IoMdLogIn size={30} color="green" />
          </span>
        </AuthLayout>
        <div className="grid gap-4 justify-center mb-8 md:grid-cols-1">
          <Form {...form}>
            <form>
              <div>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="mt-4 text-slate-300 font-medium text-sm">
                        Username
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className=""
                          placeholder="Enter Username"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="mt-3">
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
              <div className="mt-5">
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-slate-300">
                        Confirm Password
                      </FormLabel>
                      <FormControl>
                        <Input
                          className=""
                          type="password"
                          {...field}
                          placeholder=" Confirm Password"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="mt-4">
                <Button className="text-white px-12 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm  py-2.5 text-center me-2 mb-2">
                  Signup
                </Button>
              </div>
            </form>
          </Form>
          <p className="text-slate-400">
            Dont'Have an Account ? <Link to="/login">Login</Link>
          </p>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Signup;
