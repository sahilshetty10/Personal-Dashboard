import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import { useState, useEffect, useRef } from "react";

const ChatBox = () => {
  const [messages, setMessages] = useState([
    { user: false, text: "Hi! I'm your AI assistant. How can I assist you?" },
    { user: true, text: "I need help with my account" },
    {
      user: false,
      text: "Sure, I can help you with that. Please provide me with your account number.",
    },
    // { user: false, text: "Hi! I'm your AI assistant. How can I assist you?" },
    // { user: true, text: "I need help with my account" },
    // {
    //   user: false,
    //   text: "Sure, I can help you with that. Please provide me with your account number.",
    // },
    // { user: false, text: "Hi! I'm your AI assistant. How can I assist you?" },
    // { user: true, text: "I need help with my account" },
    // {
    //   user: false,
    //   text: "Sure, I can help you with that. Please provide me with your account number.",
    // },
    // { user: false, text: "Hi! I'm your AI assistant. How can I assist you?" },
    // { user: true, text: "I need help with my account" },
    // {
    //   user: false,
    //   text: "Sure, I can help you with that. Please provide me with your account number.",
    // },
    // { user: false, text: "Hi! I'm your AI assistant. How can I assist you?" },
    // { user: true, text: "I need help with my account" },
    // {
    //   user: false,
    //   text: "Sure, I can help you with that. Please provide me with your account number.",
    // },
    // { user: false, text: "Hi! I'm your AI assistant. How can I assist you?" },
    // { user: true, text: "I need help with my account" },
    // {
    //   user: false,
    //   text: "Sure, I can help you with that. Please provide me with your account number.",
    // },
  ]);

  // scroll to bottom of chat
  const messagesEndRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const formSchema = z.object({
    message: z.string().min(1),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setMessages([...messages, { user: true, text: values.message }]);
    form.reset();
  };
  return (
    <section className="col-span-2 row-span-3 h-full">
      <Card className="h-full flex flex-col justify-between">
        <CardHeader>
          <CardTitle>Chat</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col h-full gap-4 overflow-auto">
          {messages.map((message, index) => (
            <p
              key={index}
              className={`${
                message.user
                  ? "self-end bg-green-400"
                  : "self-start bg-blue-400"
              } bg-gray-200 p-2 rounded`}
            >
              {message.text}
            </p>
          ))}
          <div ref={messagesEndRef} />
        </CardContent>
        <CardFooter>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 w-full"
            >
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Enter something" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </CardFooter>
      </Card>
    </section>
  );
};

export default ChatBox;
