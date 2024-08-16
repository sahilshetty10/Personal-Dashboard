import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
  FormField,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/NavBar";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Signup = () => {
  const router = useRouter();
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const formSchema = z
    .object({
      name: z.string().min(2, { message: "Name is too short" }).max(50),
      email: z.string().email({ message: "Invalid email address" }),
      password: z
        .string()
        .min(8, { message: "Password must be more than 8 characters" }),
      confirmPassword: z
        .string()
        .min(8, { message: "Password must be more than 8 characters" }),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords must match",
      path: ["confirmPassword"],
    });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      if (file.size > 500000) {
        // Check if file size is over 1MB
        const reader = new FileReader();
        reader.onload = () => {
          const img = new Image();
          img.src = reader.result as string;

          img.onload = () => {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");

            if (ctx) {
              const maxWidth = 800; // Set a maximum width for the image
              const scaleSize = maxWidth / img.width;
              canvas.width = maxWidth;
              canvas.height = img.height * scaleSize;

              ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

              canvas.toBlob((blob) => {
                if (blob && blob.size <= 1000000) {
                  setImage(new File([blob], file.name, { type: file.type }));
                } else {
                  form.setError("name", {
                    type: "manual",
                    message: "Compressed image size is still over 1MB.",
                  });
                }
              }, file.type);
            }
          };
        };
        reader.readAsDataURL(file);
      } else {
        setImage(file); // Set the image directly if it's already under 1MB
      }
    }
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!image) {
      form.setError("name", {
        type: "manual",
        message: "Please upload an image",
      });
      return;
    }

    setLoading(true); // Start loading

    const { name, email, password } = values;

    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64Image = reader.result?.toString().split(",")[1]; // Get base64 part
      try {
        const response = await fetch("/api/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, password, image: base64Image }),
        });

        if (response.ok) {
          router.push("/");
        } else {
          const error = await response.json();
          form.setError("email", {
            type: "manual",
            message: error.message,
          });
        }
      } catch (error: any) {
        form.setError("email", {
          type: "manual",
          message: error.message,
        });
      } finally {
        setLoading(false); // End loading
      }
    };

    reader.readAsDataURL(image);
  }

  return (
    <>
      <Navbar />
      <main className="xl:w-1/2 m-auto xl:h-[90vh] flex items-center justify-center p-8">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 xl:w-1/2 bg-background p-8"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email" {...field} />
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
                      placeholder="Enter your password"
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
                      placeholder="Confirm your password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormItem>
              <FormLabel>Profile Image</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>

            <Button type="submit" disabled={loading}>
              {loading ? "Signing Up..." : "Sign Up"}
            </Button>
            <p>
              Already have an account?{" "}
              <Link href="/login" className="text-blue-600">
                Login
              </Link>
            </p>
          </form>
        </Form>
      </main>
    </>
  );
};

export default Signup;
