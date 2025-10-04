import { useForm } from 'react-hook-form'
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

export default function Login() {
  const form = useForm({ defaultValues: { email: '', password: '' }})
  function onSubmit(values){ alert(`Welcome ${values.email}`) }
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div className="max-w-sm mx-auto w-full space-y-6">
        <div>
          <h2 className="text-2xl font-bold">Login to your account</h2>
          <p className="text-sm text-muted-foreground">Enter your email below to login to your account</p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField name="email" control={form.control} rules={{required:'Email is required'}} render={({field})=> (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl><Input placeholder="john@example.com" type="email" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField name="password" control={form.control} rules={{required:'Password is required'}} render={({field})=> (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl><Input type="password" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <Button className="w-full" type="submit">Login</Button>
          </form>
        </Form>
        <div className="text-center text-sm text-muted-foreground">Don't have an account? <Link to="#" className="underline">Register</Link></div>
      </div>
      <div className="hidden md:block rounded-xl overflow-hidden">
        <img alt="doctor" src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop" className="w-full h-[70vh] object-cover" />
      </div>
    </div>
  )
}



