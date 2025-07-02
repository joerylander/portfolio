'use client';

import { useForm } from 'react-hook-form';
import { Button } from '../ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { azaret_mono, inter } from '@/lib/fonts';

export default function Contact() {
  const form = useForm();

  return (
    <>
      <h2 className={`${inter.className} text-4xl font-bold`}>Contact</h2>
      <Form {...form}>
        <form className="flex h-[600px] w-full max-w-3xl flex-col gap-8">
          <div className="flex gap-10">
            <Input
              id="firstName"
              type="text"
              placeholder="First Name"
              className={azaret_mono.className}
            />
            <Input
              id="lastName"
              type="text"
              placeholder="Last Name"
              className={azaret_mono.className}
            />
          </div>
          <Input
            id="email"
            type="text"
            placeholder="E-mail"
            className={azaret_mono.className}
          />
          <Textarea
            id="message"
            placeholder="Describe what you need help with..."
            className={`${azaret_mono.className} h-32`}
          />
          <Button type="submit" className="mx-auto h-12 w-1/2">
            Let's get started!
          </Button>
        </form>
      </Form>
    </>
  );
}
