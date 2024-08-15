// login page for the app
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { app } from "../firebase";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/NavBar";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const login = () => {
  // form schema
  const formSchema = z
    .object({
      username: z.string().min(2).max(50),
      password: z
        .string()
        .min(8, { message: "Password must be more than 8 characters" })
        .max(100),
      confirmPassword: z
        .string()
        .min(8, { message: "Password must be more than 8 characters" })
        .max(100),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords must match",
      path: ["confirmPassword"],
    });
  // defining the form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
      confirmPassword: "",
    },
  });

  // submit function
  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    const username = values.username;
    const password = values.password;

    try {
      await createUserWithEmailAndPassword(getAuth(app), username, password);
      // localStorage.setItem("userId", data.userId);
      window.location.href = "/";
    } catch (e) {
      // Throw error
      form.setError("username", {
        type: "manual",
        message: e.,
      });
    }
  }

  return (
    <>
      <Navbar />
      <main className="w-1/2 m-auto h-[90vh] flex items-center justify-center">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 w-1/2 bg-background p-8"
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Username" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter Password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Confirm Password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
            <p>
              Already have an account?{" "}
              <a href="/login" className="text-blue-600">
                Login
              </a>
            </p>
          </form>
        </Form>
      </main>
    </>
  );
};

export default login;
