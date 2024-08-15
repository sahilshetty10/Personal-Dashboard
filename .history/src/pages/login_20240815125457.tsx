// login page for the app
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
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
import { clientConfig, serverConfig } from "../config";
import { getTokens } from "next-firebase-auth-edge";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";

const tokens = await getTokens(cookies(), {
  apiKey: clientConfig.apiKey,
  cookieName: serverConfig.cookieName,
  cookieSignatureKeys: serverConfig.cookieSignatureKeys,
  serviceAccount: serverConfig.serviceAccount,
});

if (!tokens) {
  notFound();
}
const login = () => {
  // form schema
  const formSchema = z.object({
    username: z.string().min(2).max(50),
    password: z
      .string()
      .min(8, { message: "Password must be more than 8 characters" })
      .max(100),
  });
  // defining the form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  // submit function
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // check if username and password are in firebase db and set cookie "userId"
    const username = values.username;
    const password = values.password;

    // Check if username and password are correct wiith backend at 8080
    try {
      const response = await fetch("http://localhost:8080/authenticateUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      localStorage.setItem("userId", data.userId);
      window.location.href = "http://localhost:3000/";
    } catch (e) {
      // Throw error
      form.setError("username", {
        type: "manual",
        message: "Username or password is incorrect",
      });
    }
  }

  return (
    <>
      <Navbar />
      <main className="w-1/2 m-auto h-[90vh] flex items-center justify-center flex-col">
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
            <Button type="submit">Submit</Button>
            <p>
              Don't have an account?{" "}
              <a href="/signup" className="text-blue-600">
                Sign-up
              </a>
            </p>
          </form>
        </Form>
      </main>
    </>
  );
};

export default login;
