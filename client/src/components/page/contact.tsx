'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
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
    email: z.string(),
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

    try {
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

      if (res.ok) {
        form.reset();
        console.log('Message sent successfully');
      } else console.error('Submission failed');
    } catch (e) {
      console.error(
        e instanceof Error ? e.message : 'Error: Could not submit message',
      );
    }
  }

  return (
    <>
      <h2 className={`${inter.className} text-4xl font-bold`}>Contact</h2>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex h-[600px] w-full max-w-3xl flex-col gap-8"
        >
          <div className="flex gap-8">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input
                      id="firstName"
                      type="text"
                      className={azaret_mono.className}
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
                      className={azaret_mono.className}
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
                    className={azaret_mono.className}
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
                    className={`${azaret_mono.className} h-32`}
                    placeholder="Describe what you need help with..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" size="lg" className="mx-auto h-12 w-1/2">
            Let's get started!
          </Button>
        </form>
      </Form>
    </>
  );
}
