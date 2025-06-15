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

export default function Contact() {
  const form = useForm();

  return (
    <Form {...form}>
      <form className="flex h-[600px] w-full max-w-3xl flex-col justify-evenly">
        <div className="flex gap-10">
          <label htmlFor="firstName">First Name</label>
          <Input id="firstName" type="text" placeholder="First Name" />
          <Input id="lastName" type="text" placeholder="Last Name" />
        </div>
        <Input id="email" type="text" placeholder="E-mail" />
        <Textarea
          id="message"
          placeholder="Describe what you need help with..."
        />
        <Button type="submit">Let's get started!</Button>
      </form>
    </Form>
  );
}
