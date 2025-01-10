import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function FooterAuth({ label, btnText, link }) {
  return (
    <footer className="w-full flex justify-center items-center gap-4 ">
      <p className="text-sm tracking-[0.020em]"> {label} </p>
      <Link href={link}>
        <Button variant="outline" className="text-sm/6 font-semibold">
          {btnText}
        </Button>
      </Link>
    </footer>
  )
}
