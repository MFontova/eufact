import { Button } from "@/components/tremor/Button";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <p className="text-2xl">Bon dia/Bona tarda, las mujeres ya no lloran, las mujeres <span className="font-semibold">facturan</span></p>
      <div className="my-5 flex gap-5">
        <Button variant="secondary">
          <Link href='/clients/new' className="text-xl" >Nou client</Link>
        </Button>
        <Button variant="secondary">
          <Link href='/work-registers/new' className="text-xl" >{`Registre d'hores`}</Link>
        </Button>
      </div>
    </main>

  );
}
