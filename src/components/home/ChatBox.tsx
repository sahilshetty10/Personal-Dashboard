import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { set, z } from "zod";
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
  const [canChat, setCanChat] = useState(false);

  useEffect(() => {
    (async () => {
      if (window.ai) {
        setCanChat(true);
        const ai = await window.ai.createTextSession();
      }
    })();
  }, []);

  const [messages, setMessages] = useState([
    { user: false, text: "Hi! I'm your AI assistant. How can I assist you?" },
  ]);

  const generateAnswer = async (message: string) => {
    const ai = await window.ai.createTextSession();
    const response = await ai.prompt(message);
    return response;
  };

  // scroll to bottom of chat
  const messagesEndRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
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

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setMessages([...messages, { user: true, text: values.message }]);
    form.reset();
    const response = await generateAnswer(values.message);
    setMessages([
      ...messages,
      { user: true, text: values.message },
      { user: false, text: response },
    ]);
  };

  if (!canChat) {
    return (
      <section className="xl:col-span-2 xl:row-span-3 h-full">
        <Card className="h-full flex flex-col gap-4 justify-center items-center">
          <CardHeader>
            <CardTitle>Chat</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Your browser does not support ai chat. Please use chrome dev beta
              for this feature.
            </CardDescription>
          </CardContent>
        </Card>
      </section>
    );
  } else {
    return (
      <section className="xl:col-span-2 xl:row-span-3 h-full">
        <Card className="h-full flex flex-col gap-4 justify-between overflow-auto">
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
  }
};

export default ChatBox;
