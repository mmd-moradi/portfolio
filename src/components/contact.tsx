"use client";
import { useMemo } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "./ui/textarea"
import { FaWhatsapp } from "react-icons/fa";
import { useRouter } from "next/navigation";
import axios from "axios"
import { toast } from "sonner";

export const ContactForm = () => {
  const router = useRouter()
  const formSchema = useMemo(() => (
    z.object({
      name: z.string({required_error: "Name is required"}).min(1, {message: "Name is required"}),
      email: z.string({required_error: "Email is required"}).email({message: "Invalid email address"}),
      message: z.string({required_error: "Message is required"}).min(1, {message: "Message is required"}),
    })
  ), [])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    }
  })

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    console.log(data)
    const response = await axios.post("/api/contact", data)
    if (response.status === 200) {
      form.reset()
      toast.success("Thank you for your message! I will get back to you soon.")
    }
  }

  return (
    <div className="py-10">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-2 gap-x-2 gap-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Your name" />
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
                  <Input {...field} placeholder="Your email address" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Your message"
                    className="min-h-20"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-between col-span-2">
          <Button className="" type="submit" disabled={form.formState.isSubmitting}>Submit</Button>
          <Button
            onClick={() => router.push("https://wa.me/5561981849932?text=Hi%20Mohammad%2C%20I%20want%20to%20work%20on%20a%20project%20with%20you%21")}
            variant={"outline"}
            type="button"
            className="hover:bg-green-400 hover:border-0 ease-linear hover:scale-105 hover:shadow-md hover:backdrop-blur-sm transition-all duration-200 "
          >
            <FaWhatsapp className="w-4 h-4 mr-2" />
            <span>Chat on WhatsApp</span>
          </Button>
          </div>
        </form>
      </Form>
    </div>
  )


}




