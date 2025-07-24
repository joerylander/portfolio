'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { Button } from '../ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { azaret_mono, inter } from '@/lib/fonts';

export default function Contact() {
  const formSchema = z.object({
    firstName: z
      .string()
      .min(2, { message: 'First name must be at least 2 characters.' })
      .max(30, { message: 'First name can maximum be 30 characters long.' }),
    lastName: z
      .string()
      .min(2, { message: 'Last name must be at least 2 characters.' })
      .max(30, { message: 'Last name can maximum be 30 characters long.' }),
    email: z.string().email(),
    message: z
      .string()
      .min(10, { message: 'Message must be at least 10 characters.' }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    },
  });

  async function onSubmit(formData: z.infer<typeof formSchema>) {
    const { firstName, lastName, email, message } = formData;
    const submission = async () => {
      const res = await fetch('https://formspree.io/f/mzzgwwlv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: `${firstName} ${lastName}`,
          firstName,
          lastName,
          email,
          message,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(
          errorData.message || 'Failed to send message. Please try again.',
        );
      }

      return res;
    };

    toast.promise(submission(), {
      loading: 'Sending message...',
      success: () => {
        form.reset();
        return 'Message sent successfully!';
      },
      error: (err: Error) =>
        err.message ||
        'Something went wrong. Try instead sending to the email at the bottom of the page...',
    });
  }

  return (
    <>
      <h2
        className={`${inter.className} text-center text-2xl font-bold capitalize md:text-3xl lg:text-4xl`}
      >
        Connect with us
      </h2>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex h-[600px] w-full max-w-3xl flex-col gap-8"
        >
          <div className="flex flex-col gap-8 md:flex-row">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input
                      id="firstName"
                      type="text"
                      className={`${azaret_mono.className} placeholder:text-sm placeholder:italic placeholder:sm:text-base`}
                      placeholder="First name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input
                      id="lastName"
                      type="text"
                      className={`${azaret_mono.className} placeholder:text-sm placeholder:italic placeholder:sm:text-base`}
                      placeholder="Last name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    id="email"
                    type="email"
                    className={`${azaret_mono.className} placeholder:text-sm placeholder:italic placeholder:sm:text-base`}
                    placeholder="E-mail"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    id="message"
                    className={`${azaret_mono.className} h-32 placeholder:text-sm placeholder:italic placeholder:sm:text-base`}
                    placeholder="Describe what you need help with..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" size="lg" className="mx-auto h-12 w-1/2">
            Let&apos;s connect!
          </Button>
        </form>
      </Form>
    </>
  );
}
