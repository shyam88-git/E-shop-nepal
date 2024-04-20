import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { IoMdLogIn } from "react-icons/io";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

type FormSceham = z.infer<typeof formSchema>;

const Login = () => {
  return (
    <div className="flex flex-col justify-center border border-slate-400 shadow-2xl bg-blue-900  items-center h-auto  ">
      <div className="w-[900px] my-16 bg-white md:max-w-[200px]">
        <div className=" flex justify-center space-x-5">
          <span className="mt-1">
            <IoMdLogIn size={30} color="green" />
          </span>
          <p className="text-2xl font-medium text-green-400 ">Login</p>
        </div>
        <div className="flex justify-center items-center flex-col">
          <Form>
            <form>
              <FormField
                control=""
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter Email Address" />
                    </FormControl>
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Login;
