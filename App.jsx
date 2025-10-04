
import './App.css'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form'
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from '@/components/ui/navigation-menu'

function App() {
  const form = useForm({
    defaultValues: { email: '' }
  })

  function onSubmit(values) {
    alert(`Submitted: ${values.email}`)
  }

  return (
    <div className="p-6 space-y-6">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
            <NavigationMenuContent className="p-3">
              <NavigationMenuLink href="/home">Home</NavigationMenuLink>
              <NavigationMenuLink href="/about">About</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <Card className="max-w-md">
        <CardHeader>
          <CardTitle>Quick Signup</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                rules={{ required: 'Email is required' }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="you@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter>
          <Label className="text-muted-foreground">Uses shadcn/ui components</Label>
        </CardFooter>
      </Card>
    </div>
  )
}

export default App
