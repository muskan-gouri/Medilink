import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Boxes } from 'lucide-react'

export default function About() {
  return (
    <div className="space-y-10">
      {}
      <div className="grid md:grid-cols-3 gap-8 items-start">
        <h1 className="md:col-span-2 text-4xl md:text-5xl font-extrabold leading-tight">
          About Our Hospital
        </h1>
        <p className="text-sm md:text-base text-muted-foreground">
          MediLink is a full-service hospital dedicated to compassionate, patient-centered care. We combine advanced clinical services with a commitment to community health and safety.
        </p>
      </div>

      {}
      <div className="grid md:grid-cols-3 gap-6 items-start">
        <Card className="md:col-span-2 h-[520px] grid place-items-center">
          <div className="flex items-center justify-center w-[85%] h-[75%] rounded-2xl bg-muted">
            <Boxes className="size-28 text-foreground/80" />
          </div>
        </Card>

        <div className="md:col-start-3 grid grid-rows-[auto,1fr] gap-4 h-[520px]">
          <Card className="bg-card/90">
            <CardContent className="py-6 space-y-4">
              <div className="text-sm text-muted-foreground">24/7 Emergency & Critical Care</div>
              <p className="text-sm text-muted-foreground">
                Our emergency department provides rapid, expert care around the clock, supported by specialist teams and modern facilities.
              </p>
              <Button variant="secondary">Contact Emergency</Button>
            </CardContent>
          </Card>

          <Card className="h-full grid place-items-center">
            <div className="flex items-center justify-center w-[70%] h-[70%] rounded-2xl bg-accent">
              <Boxes className="size-14 text-foreground/70" />
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}


