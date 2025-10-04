import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Home() {
  return (
    <div className="space-y-10">
      <section className="text-center space-y-6 pt-8">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Your Health, <span className="text-primary">Our Priority</span>
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Find trusted doctors and manage your healthcare efficiently. Connect with qualified professionals and book appointments with ease.
        </p>
        <div className="mx-auto max-w-2xl flex gap-2">
          <Input placeholder="Search for doctors, clinics, or services..." />
          <Button>Search</Button>
        </div>
      </section>
      <section className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {[
          ['10,000+','Doctors'],
          ['50,000+','Patients'],
          ['100+','Specialties'],
          ['4.9★','Rating'],
        ].map(([stat,label])=> (
          <div key={label}>
            <div className="text-3xl md:text-4xl font-bold text-primary">{stat}</div>
            <div className="text-sm text-muted-foreground">{label}</div>
          </div>
        ))}
      </section>
    </div>
  )
}



