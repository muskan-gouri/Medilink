import { Link, NavLink, Outlet } from 'react-router-dom'
import { Stethoscope } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <nav className="container h-14 flex items-center gap-6">
          
          <Link to="/" className="flex items-center gap-2 font-semibold">
            <Stethoscope className="h-5 w-5 text-primary" />
            <span>Medilink</span>
          </Link>

          
          <div className="flex items-center gap-4 text-sm">
            <NavLink to="/" end className={({ isActive }) => isActive ? 'text-foreground' : 'text-muted-foreground'}>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'text-foreground' : 'text-muted-foreground'}>
              About
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-foreground' : 'text-muted-foreground'}>
              Contact
            </NavLink>
            <NavLink to="/doctors" className={({ isActive }) => isActive ? 'text-foreground' : 'text-muted-foreground'}>
              Doctors
            </NavLink>
          </div>

          
          <div className="ml-auto">
            <Button asChild>
              <Link to="/login">Login</Link>
            </Button>
          </div>
        </nav>
      </header>
      <main className="container py-8 flex-1">
        <Outlet />
      </main>
      <footer className="border-t">
        <div className="container py-6 text-sm text-muted-foreground">© {new Date().getFullYear()} Medilink</div>
      </footer>
    </div>
  )
}


