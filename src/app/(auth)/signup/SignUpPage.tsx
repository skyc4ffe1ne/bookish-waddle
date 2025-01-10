'use client'

import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

export default function SignUpPage() {
  const form = useForm()
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit()}
        className="max-w-sm w-full mx-auto pb-16"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="mb-6">
              <FormLabel className="text-sm/6 text-slate-900 font-semibold mb-2">
                Email
              </FormLabel>
              <FormControl>
                <Input
                  type="email"
                  {...field}
                  className=" focus-visible:ring-offset-0 focus-visible:ring-sky-500 ring-slate-200 ring-1 shadow-sm ring-transparent"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="mb-6">
              <FormLabel className="text-sm/6 text-slate-900 font-semibold mb-2">
                Username
              </FormLabel>
              <FormControl>
                <Input
                  type="username"
                  {...field}
                  className=" focus-visible:ring-offset-0 focus-visible:ring-sky-500 ring-slate-200 ring-1 shadow-sm ring-transparent"
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="mb-6">
              <FormLabel className="text-sm/6 text-slate-900 font-semibold mb-2">
                Password
              </FormLabel>
              <FormControl>
                <Input
                  type="password"
                  {...field}
                  className=" focus-visible:ring-offset-0 focus-visible:ring-sky-500 ring-slate-200 ring-1 shadow-sm ring-transparent"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full text-sm/6 font-semibold text-background"
        >
          Sign up
        </Button>
      </form>
    </Form>
  )
}
