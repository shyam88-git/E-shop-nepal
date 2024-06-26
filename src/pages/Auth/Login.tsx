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
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { showToast } from "@/lib/Toast";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

type FormSchemaType = z.infer<typeof formSchema>;

const Login = () => {
  const [loginUser] = useLoginMutation();
  const navigate = useNavigate();
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: FormSchemaType) {
    await loginUser(values)
      .unwrap()
      .then(() => {
        showToast("Login Successfully" || "", {
          type: "success",
        });
        navigate("/dashboard");
      })
      .catch((err: AuthPayloadError) => {
        err?.errors.map((el) => {
          showToast(el.message, {
            type: "error",
          });
        });
      });
  }

  return (
    <div className="flex justify-center items-center h-auto">
      <div className="my-16 px-16 bg-blue-950">
        <AuthLayout title="Login">
          <span className="mt-3">
            <IoMdLogIn size={30} color="green" />
          </span>
        </AuthLayout>
        <div className="grid gap-4 justify-center mb-8 md:grid-cols-1">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
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
                <Button
                  type="submit"
                  className="text-white px-12 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm py-2.5 text-center me-2 mb-2"
                >
                  Login
                </Button>
              </div>
            </form>
          </Form>
          <p className="text-slate-400">
            Don't Have an Account ? <Link to="/sign-up">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
